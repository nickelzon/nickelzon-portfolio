import React from "react";
import NavigationBar from "./Components/NavigationBar";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import Footer from "./Components/Footer";

const App = () => {
  const scroll = () => {
    let elements: any = document.querySelectorAll(".opacity");
    for (var i = 0; i < elements.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = elements[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        elements[i].classList.add("active");
      } else {
        elements[i].classList.remove("active");
      }
    }
    window.addEventListener("scroll", scroll);
  };

  return (
    <div className="rootdiv w-full">
      <div className="navbar-and-maincontent-container">
        <div>
          <NavigationBar />
        </div>

        <div className="w-full">
          <Hero />
          <Education sheesh={scroll} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
