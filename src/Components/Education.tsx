const Education = () => {
  const scroll = () => {
    let elements = document.querySelectorAll(".opacity");
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
  };
  window.addEventListener("scroll", scroll);
  scroll();

  return (
    <div className="hero flex flex-col flex-wrap items-center p-5 font-questrial">
      <span className="mt-10 text-2xl font-extrabold text-orange-500">
        Education
      </span>
      <span className="opacity text-lg text-orange-500">
        In college, I took Bachelor of Science in Computer Science in Pangasinan
        State University. <br />I got my diploma and became a degree holder in
        August 2022.
      </span>
    </div>
  );
};

export default Education;
