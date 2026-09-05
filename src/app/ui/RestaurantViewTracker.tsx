"use client";

import { useEffect } from "react";
import { trackEvent } from "@/src/lib/analytics";

interface RestaurantViewTrackerProps {
  restaurantSlug: string;
  restaurantName?: string;
  category?: string;
}

export default function RestaurantViewTracker({
  restaurantSlug,
  restaurantName,
  category,
}: RestaurantViewTrackerProps) {
  useEffect(() => {
    trackEvent("restaurant_view", {
      restaurant_slug: restaurantSlug,
      restaurant_name: restaurantName || restaurantSlug,
      category,
    });
  }, [restaurantSlug, restaurantName, category]);

  return null;
}
