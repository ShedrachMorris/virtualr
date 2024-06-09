import FeatureSection from "./Components/FeatureSection";
import Footer from "./Components/Footers";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Workflow from "./Components/Workflow";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer/>
    </>
  );
};
export default App;
