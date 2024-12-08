import StatisticsBar from "../components/BestInternet";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import WhyChooseMuscle from "../components/WhyChooseMuscle";
import Footer from "../components/Footer";
import WhyChooseSection from "../components/WhyChooseSection";
import Pricing from "../components/Pricing";
import PricingSection from "../components/PricingSection";




function Home() {
  return (
    <>
      <div className="flex  items-center justify-center flex-col w-full  overflow-hidden">
     
      {/* <Nav /> */}
      <Hero />
      
        {/* <StatisticsBar /> */}
        <WhyChooseSection />
        {/* <PricingSection /> */}
        <Pricing />
        <WhyChooseMuscle />
        {/* <Blog /> */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
