import StatisticsBar from "./components/StatisticsBar";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ClientFeedback from "./components/ClientFeedback";
import Footer from "./components/Footer";
import TrainersSection from "./components/TrainersSection";
import Pricing from "./components/Pricing";
import ProgramsGrid from "./components/ProgramsGrid";
import Blog from "./components/Blog";



function App() {
  return (
    <>
      <div className="flex bg-[#222222] items-center justify-center flex-col w-full  overflow-hidden">
     
      <Nav />
      <Hero />
      
        {/* <StatisticsBar /> */}
        <TrainersSection />
        <ProgramsGrid />
        <Pricing />
        <ClientFeedback />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
