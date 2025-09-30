import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
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
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default About;
