import Comrades from "./components/Comrades.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Knowledge from "./components/Knowledge.jsx";
import Midheading from "./components/Midheading.jsx";
import Navbar from "./components/Navbar.jsx";
import Toil from "./components/Toil.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Midheading />
      <Knowledge />
      <Comrades />
      <Toil />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
