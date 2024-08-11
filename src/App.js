import AboutUs from "./components/AboutUs/AboutUs";
import Banner from "./components/Banner/Banner";
import CompanyData from "./components/CompanyData/CompanyData.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/OurServices/Services.jsx";
import Work from "./components/Work/Work.jsx";

function App() {
  return (
    <div>
     <Navbar />
     <Banner />
     <AboutUs />
     <Services />
     <Work/>
     <CompanyData/>
     <ContactForm />
     <Footer />
    </div>
  );
}

export default App;
