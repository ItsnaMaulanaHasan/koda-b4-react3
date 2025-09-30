import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow mt-50 md:px-40 px-10 pb-40">
        <AboutSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

const AboutSection = () => {
  return (
    <div className="bg-[#263640] p-20 text-white relative w-[70%]">
      <div className="w-[70%]">
        <div className="text-slate-400 mb-5 uppercase">Unsere Firmenhistorie</div>
        <div className="font-bold text-3xl mb-10">Diplom-Ingenieur Dieter Weiss gründete im Jahre 1971 sein Ingenieurbüro.</div>
        <div>Fast 30 Jahre lang führte er es als Alleininhaber. 1998 trat Sohn Klaus weiss als Stellvertreter an die Seite seines Vaters. Seit 2006 ist Diplom-Ingenieur Klaus Weiss alleiniger Geschäftsführer</div>
        <div className="h-[1px] w-full bg-gray-500 mt-20"></div>
        <div className="mt-5 mb-5">Lesen Sie weiter</div>
      </div>
      <div className="absolute -right-60 top-20">
        <img src="/public/img/img-about.png" alt="Image About" className="w-sm shadow-2xl" />
      </div>
    </div>
  );
};

export default About;
