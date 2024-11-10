import Acessibility from "./components/Acessibility";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CustomerExperience from "./components/CustomerExperience";
import Footer from "./components/Footer";
import TrainingSection from "./components/TrainingSection";
const toggleDarkMode = () => {
  const isDarkMode = document.documentElement.classList.toggle("dark");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
};

// To enable dark mode based on the stored preference on page load
if (localStorage.getItem("darkMode") === "enabled") {
  document.documentElement.classList.add("dark");
}

function App() {
  return (
    <>
      <div className="flex items-center justify-center flex-col w-full bg-gray-100 overflow-hidden">
      <div className="min-h-screen  w-full">
      <Nav />
      <Hero />
      </div>
        <Acessibility />
        <TrainingSection />
        <CustomerExperience />
        <Footer />
      </div>
    </>
  );
}

export default App;
