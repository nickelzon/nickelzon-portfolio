import NavigationBar from "./Components/NavigationBar";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";

const App = () => {
  const herodesc: string[] = [
    "Self taught React Developer.",
    "Graphic Designer.",
    "Musician who did not study music theory.",
    "Photographer.",
    "Video Editor.",
    "Enthusiast.",
    "Overcaffeinated.",
  ];

  const scroll = (respond: string) => {
    let elements: any = document.querySelectorAll(respond);
    for (var i = 0; i < elements.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = elements[i].getBoundingClientRect().top;
      var elementVisible = 1;
      if (elementTop < windowHeight - elementVisible) {
        elements[i].classList.add("active");
      } else {
        elements[i].classList.remove("active");
      }
    }
  };

  //herodesc interval function below
  let i = 0;
  setInterval(() => {
    let herosubtitles = document.querySelectorAll(".hero-description");
    if (i === 7) {
      i = 0;
    }
    herosubtitles[0].innerHTML = herodesc[i];

    i += 1;
  }, 4000);

  // pointer-tracker
  window.addEventListener("mousemove", (e) => {
    const tracker: any = document.querySelector(".pointer-tracker");
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
  });

  //code break text
  const code = "</>";

  return (
    <div className="rootdiv w-full">
      {/* pointer tracker */}
      <div className="pointer-tracker fixed z-[9999] flex items-end">
        <span className="font-questrial text-2xl font-bold text-yellow-500">
          {code}
        </span>
      </div>
      <div className="navbar-and-maincontent-container">
        <div>
          <NavigationBar />
        </div>

        <div className="w-full">
          <Hero herodesc={herodesc} />
          <Education sheesh={scroll} />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
