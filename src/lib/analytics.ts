// Telemetry and Analytics module for Veryfazty-App
// Supports Google Analytics 4 (gtag) and postMessage bridge with viw-carta iframe embeds.

export type VeryfaztyEvent =
  | {
      name: "restaurant_view";
      params: {
        restaurant_slug: string;
        restaurant_name?: string;
        category?: string;
      };
    }
  | {
      name: "carta_click";
      params: {
        restaurant_slug: string;
        restaurant_name?: string;
        method: "embed" | "static" | "external";
      };
    }
  | {
      name: "category_filter";
      params: {
        category: string;
      };
    }
  | {
      name: "restaurant_click";
      params: {
        restaurant_slug: string;
        restaurant_name: string;
        category?: string;
      };
    }
  | {
      name: "whatsapp_click";
      params: {
        source: "footer" | "floating_bar" | "promo" | "cart" | "header" | "restaurant_card";
        restaurant_name?: string;
        phone?: string;
        message?: string;
      };
    }
  | {
      name: "promo_click";
      params: {
        promo_id: string;
        promo_type: "whatsapp" | "internal";
        restaurant_name?: string;
        internal_link?: string;
      };
    }
  | {
      name: "menu_tab_change";
      params: {
        restaurant_slug: string;
        tab_name: string;
        sub_option?: string;
      };
    }
  | {
      name: "viw_carta_event_forwarded";
      params: {
        inner_event: string;
        restaurant_slug?: string;
        restaurant_name?: string;
        [key: string]: unknown;
      };
    };

/**
 * Dispatches an event to Google Analytics (gtag).
 */
export function trackEvent(
  eventName: VeryfaztyEvent["name"],
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;

  try {
    const win = window as unknown as {
      gtag?: Function;
      dataLayer?: unknown[];
    };

    // Ensure dataLayer array exists
    win.dataLayer = win.dataLayer || [];

    // Ensure gtag function exists and forwards arguments to dataLayer
    if (typeof win.gtag !== "function") {
      win.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        win.dataLayer!.push(arguments);
      };
    }

    win.gtag("event", eventName, {
      ...params,
      app: "veryfazty-web",
      timestamp: new Date().toISOString(),
    });

    if (process.env.NODE_ENV !== "production") {
      console.log(`[Veryfazty Analytics] ${eventName}:`, params);
    }
  } catch (error) {
    console.error("[Veryfazty Analytics Error]:", error);
  }
}

/**
 * Initializes the postMessage listener to capture telemetry forwarded from embedded viw-carta iframes.
 * Returns a cleanup function.
 */
export function initIframeAnalyticsListener(): () => void {
  if (typeof window === "undefined") return () => {};

  const handleMessage = (event: MessageEvent) => {
    // Only process messages that come with the viw-carta-analytics signature
    if (
      event.data &&
      typeof event.data === "object" &&
      event.data.source === "viw-carta-analytics" &&
      event.data.eventName
    ) {
      const { eventName, params } = event.data;

      // Track the forwarded event directly in GA4
      trackEvent("viw_carta_event_forwarded", {
        inner_event: eventName,
        ...params,
      });

      // If it's a high-value conversion event, also fire a direct GA4 conversion
      if (eventName === "whatsapp_conversion") {
        trackEvent("whatsapp_click", {
          source: "cart",
          restaurant_name: params?.restaurant_name || params?.restaurant_slug,
          phone: params?.destination_phone,
        });
      }
    }
  };

  window.addEventListener("message", handleMessage);
  return () => window.removeEventListener("message", handleMessage);
}
