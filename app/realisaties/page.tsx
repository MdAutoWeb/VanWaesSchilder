import type { Metadata } from "next";
import GalleryFilter from "../_components/GalleryFilter";
import RevealObserver from "../_components/RevealObserver";

export const metadata: Metadata = {
  title: "Realisaties | Van Waes Schilderwerken",
  description: "Ontdek uitgevoerde projecten: binnenschilderwerk, buitenschilderwerk en decoratieve afwerkingen in Oostende en omgeving.",
};

export default function RealisatiesPage() {
  return (
    <main>
      <RevealObserver />

      <div className="page-hero">
        <div className="container">
          <span className="kicker reveal">Recent werk</span>
          <h1 className="reveal" data-d="1">Realisaties.</h1>
          <p className="lead reveal" data-d="2">Een greep uit uitgevoerde projecten, van interieur tot exterieur.</p>
        </div>
      </div>

      <section className="sec">
        <div className="container container--gallery">
          <GalleryFilter />
        </div>
      </section>
    </main>
  );
}
