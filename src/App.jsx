import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormProvider from "./contexts/FormProvider";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // Import the HomePage component
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail"; // Import the ServiceDetail component
import GetStarted from "./pages/GetStarted"; // Import the GetStarted component
import WhyChooseUs from "./pages/WhyChooseUs"; // Ensure this file exists
import ContactForm from "./pages/ContactForm";
import LearnMore from "./pages/LearnMore"; // Import the LearnMore component
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>  {/* Wrapping the app with BrowserRouter */}
      <FormProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Updated to use HomePage */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} /> {/* Route for service details */}
          <Route path="/get-started" element={<GetStarted />} /> {/* Route for GetStarted */}
          <Route path="/learn-more" element={<LearnMore />} /> {/* Route for LearnMore */}
          <Route path="/portfolio" element={<WhyChooseUs />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </FormProvider>
    </BrowserRouter>
  );
};

export default App;