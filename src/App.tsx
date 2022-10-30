import NavigationBar from "./Components/NavigationBar";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import Footer from "./Components/Footer";

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

  let i = 0;
  setInterval(() => {
    let herosubtitles = document.querySelectorAll(".hero-description");
    if (i === 7) {
      i = 0;
    }
    herosubtitles[0].innerHTML = herodesc[i];

    i += 1;
  }, 4000);

  return (
    <div className="rootdiv w-full">
      <div className="navbar-and-maincontent-container">
        <div>
          <NavigationBar />
        </div>

        <div className="w-full">
          <Hero herodesc={herodesc} />
          <Education sheesh={scroll} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
