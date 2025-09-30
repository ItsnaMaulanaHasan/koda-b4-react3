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
        <div className="text-slate-400 mb-5 uppercase">Our Company's History</div>
        <div className="font-bold text-3xl mb-10">Designing Inspiring Spaces Since 1991.</div>
        <div>
          <p>ArchDesign Studio was founded in 1991 by the visionary architect, Adi Prasetyo, with a single mission: to create architecture that is not only functional but also tells a story and blends with its environment.</p>
          <p>
            For over three decades, we have grown from a small studio into a respected architectural firm, with a portfolio that includes iconic commercial buildings, comfortable residential homes, and innovative public spaces. Our team of
            talented designers continues to push the boundaries of creativity to bring our clients' dreams to life.
          </p>
          <p></p>
        </div>
        <div className="h-[1px] w-full bg-gray-500 mt-20"></div>
        <div className="mt-5 mb-5">View Our Portfolio →</div>
      </div>
      <div className="absolute -right-60 top-20">
        <img src="/public/img/img-about.png" alt="Image About" className="w-sm shadow-2xl" />
      </div>
    </div>
  );
};

export default About;
