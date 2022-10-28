import React from "react";
import NavigationBar from "./Components/NavigationBar";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="rootdiv h-[100vh] w-full">
      <div className="navbar-and-maincontent-container">
        <div>
          <NavigationBar />
        </div>

        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
