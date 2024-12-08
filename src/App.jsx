import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./index.css";

function App() {
  const location = useLocation();
  const hideNavAndFooterPaths = [
    "/register",
    "/login",
    "/verify",
    "/confirmation",
    "/account",
  ];

  const shouldHideNavAndFooter = hideNavAndFooterPaths.includes(
    location.pathname
  );

  const [networkSpeedStatus, setNetworkSpeedStatus] = useState("");

  const checkNetworkSpeed = async () => {
    const image = new Image();
    const imageUrl = "https://via.placeholder.com/50";
    const startTime = new Date().getTime();
    const timeout = 5000;
  };

  useEffect(() => {
    const checkNetworkSpeed = async () => {
      const image = new Image();
      const imageUrl = "https://via.placeholder.com/50";
      const startTime = new Date().getTime();
      const timeout = 5000;
      // Implement network speed check logic here...
    };
  
    checkNetworkSpeed();
  
    const interval = setInterval(() => {
      checkNetworkSpeed();
    }, 10000);
  
    // Add loading animation dynamically to all images
    const images = document.querySelectorAll("img:not(.wrapped)");
    images.forEach((img) => {
      if (!img.parentNode.classList.contains("image-container")) {
        // Preserve image dimensions
        const originalWidth = img.offsetWidth;
        const originalHeight = img.offsetHeight;
  
        img.style.width = `${originalWidth}px`;
        img.style.height = `${originalHeight}px`;
  
        const wrapper = document.createElement("div");
        wrapper.className = "image-container loading";
  
        img.classList.add("wrapped");
  
        img.parentNode.insertBefore(wrapper, img);
        wrapper.appendChild(img);
  
        img.onload = () => {
          wrapper.classList.remove("loading");
          wrapper.classList.add("loaded");
        };
  
        img.onerror = () => {
          wrapper.classList.remove("loading");
          wrapper.classList.add("error");
        };
      }
    });
  
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <div className="network-status-message">
        {networkSpeedStatus && <p>{networkSpeedStatus}</p>}
      </div>

      <Outlet />
    </div>
  );
}

export default App;
