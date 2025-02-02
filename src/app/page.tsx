import Promos from "@/src/app/ui/promos";
import Partners from "@/src/app/ui/partners";
export default function Home() {
  return (
    <>
      <Promos />
      <hr />
      <section className="container-screen my-6">
        <Partners />
      </section>
    </>
  );
}
