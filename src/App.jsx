import Features from "./components/Features";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import DiscountBanner from "./components/DiscountBanner";
import Footer from "./components/Footer";
import BlogAndVideo from "./components/BlogAndVideo";
import Mentors from "./components/Mentors";
import Packages from "./components/Packages";
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
      <div className="flex items-center justify-center flex-col w-full  overflow-hidden">
     
      {/* <Nav /> */}
      <Hero />
      
        <Features />
        <BlogAndVideo />
        <Packages />
        <Mentors />
        <DiscountBanner />
        <Footer />
      </div>
    </>
  );
}

export default App;
