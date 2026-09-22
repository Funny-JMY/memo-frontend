import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Quote from "./components/Quote";
import Career from "./components/Career";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="intro-page">
      <Hero />
      <main>
        <About />
        <Quote />
        <Career />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
