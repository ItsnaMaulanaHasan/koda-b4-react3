import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col flew-grow gap-30 mt-50 md:px-40 px-10">
        <HeroSection />
        <CardsSection />
      </main>
      <footer className="w-full bottom-0">
        <Footer />
      </footer>
    </div>
  );
}

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-10">
      <div className="flex flex-col gap-5 md:mt-20 md:w-[50%]">
        <div className="text-lg text-gray-400 uppercase">Ingenieur Dieter Weiss</div>
        <div className="font-bold text-3xl">Ingenieurbüro für Bau- und Vermessungswesen</div>
        <div>Wenn Sie zuverlässige Ingenieure brauchen – das Ingenieurbüro Dieter Weiss ist Garant für den Er­folg Ihrer Projekte.</div>
      </div>
      <div className="grow-2">
        <img src="/public/img/img-hero-section.png" alt="image hero section" className="md:h-150 shadow-xl" />
      </div>
    </div>
  );
};

const CardsSection = () => {
  const contentCard = [
    {
      img: "/public/img/img-card-1.png",
      title: "Studien und Konzepte, Gesamtplanung",
      content: "Neubau und Ausbau von Straßen, Verkehrsflächen, Wasserwegen und Eisenbahnen erfordert überzeugende Verkehrskonzepte.",
    },
    {
      img: "/public/img/img-card-2.png",
      title: "Verkehrsanlagen und Ingenieurbauwerke",
      content: "Verkehrskonzepte sind ein entscheidender Faktor jeglicher Infrastruktur. Das Ingenieurbüro Weiss hat deshalb ein Expertenteam aufgebaut.",
    },
    {
      img: "/public/img/img-card-3.png",
      title: "Entwurfsvermessung, 3D-Laserscanning",
      content: "Bei Ausführung sämtlicher vermessungstechnischer Aufgaben im Leistungsbild „Enurfermessung“ sind wir ein leistungsstarker Partner.",
    },
  ];
  return (
    <div>
      <div className="md:w-[50%] mb-30">
        <div className="font-bold text-2xl">Unsere Dienstleistungen</div>
        <div className="mt-4">
          Dienstleistung ist für unsere Mitarbeiter Herausforderung, das ist die Stärke unseres Teams. Ganz gleich, ob Verkehrsplanungen, Ver- und Ent­sorgung, Lärmschutz oder Spezialgebiete - wir bieten Rundum-Service mit:
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {contentCard.map((card) => (
          <Card img={card.img} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
