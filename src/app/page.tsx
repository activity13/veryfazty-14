import Promos from "@/src/app/ui/promos";
import Partners from "@/src/app/ui/partners";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Promos />
      <section className="container-screen my-6">
        <Partners />
      </section>
    </main>
  );
}
