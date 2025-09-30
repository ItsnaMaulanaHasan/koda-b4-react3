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
        <div className="font-bold text-3xl">Creating Visionary Spaces & Timeless Designs</div>
        <div>If you need a reliable architect - ArchDesign Studio is the guarantee for your project's success, turning ideas into inspiring realities.</div>
        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#" className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300">
            View Our Projects
          </a>
          <a href="/contact" className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors duration-300">
            Contact Us
          </a>
        </div>
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
      title: "Conceptual Studies & Design",
      content: "Every great project begins with a solid concept. We translate your vision into comprehensive floor plans and feasibility studies.",
    },
    {
      img: "/public/img/img-card-2.png",
      title: "Interior & Spatial Design",
      content: "We create interiors that are both functional and aesthetic. Our expert team builds a spatial narrative that aligns with your lifestyle.",
    },
    {
      img: "/public/img/img-card-3.png",
      title: "3D Visualization & Sustainable Design",
      content: "With photorealistic 3D rendering and sustainable design principles, we ensure every detail is perfect before construction begins.",
    },
  ];
  return (
    <div>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="font-bold text-2xl">Our Services</div>
        <div className="mt-4 text-lg text-gray-600">For us, service is a welcome challenge, and that is the strength of our team. From planning and interiors to visualization—we offer a complete service for you.</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contentCard.map((card) => (
          <Card key={card.title} img={card.img} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
