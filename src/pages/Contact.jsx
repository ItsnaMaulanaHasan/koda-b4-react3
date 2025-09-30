import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow"></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
