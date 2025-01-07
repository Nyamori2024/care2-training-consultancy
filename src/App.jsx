import { BrowserRouter } from "react-router-dom";
import FormProvider from "./contexts/FormProvider";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ContactFormSection from "./components/ContactFormSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <BrowserRouter>  {/* Wrapping the app with BrowserRouter */}
      <FormProvider>
        <Navbar />
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactFormSection />
        <FooterSection />
      </FormProvider>
    </BrowserRouter>
  );
};

export default App;
