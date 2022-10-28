import React from "react";
import NavigationBar from "./Components/NavigationBar";
import Hero from "./Components/Hero";
import Education from "./Components/Education";

const App = () => {
  return (
    <div className="rootdiv w-full">
      <div className="navbar-and-maincontent-container">
        <div>
          <NavigationBar />
        </div>

        <div className="w-full">
          <Hero />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default App;
