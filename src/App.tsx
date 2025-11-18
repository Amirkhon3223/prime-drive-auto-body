import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Pricing } from "./components/Pricing";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
