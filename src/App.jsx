// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormProvider from "./contexts/FormProvider";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage"; // Import the new HomePage component
import AboutUsSection from "./components/AboutUsSection";
import ServicesSection from "./components/ServicesSection";
import ServiceDetail from "./components/ServiceDetail"; // Import the ServiceDetail component
import GetStarted from "./components/GetStarted"; // Import the GetStarted component
import PortfolioSection from "./components/PortfolioSection"; // Ensure this file exists
import ContactFormSection from "./components/ContactFormSection";
import LearnMore from "./components/LearnMore"; // Import the LearnMore component
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <BrowserRouter>  {/* Wrapping the app with BrowserRouter */}
      <FormProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Updated to use HomePage */}
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} /> {/* Route for service details */}
          <Route path="/get-started" element={<GetStarted />} /> {/* Route for GetStarted */}
          <Route path="/learn-more" element={<LearnMore />} /> {/* Route for LearnMore */}
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/contact" element={<ContactFormSection />} />
        </Routes>
        <FooterSection />
      </FormProvider>
    </BrowserRouter>
  );
};

export default App;