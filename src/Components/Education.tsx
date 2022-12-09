import { FC } from "react";
import { Education as e } from "../Links";

interface EducationProps {
  sheesh: (respond: string) => void;
}

const Education: FC<EducationProps> = ({ sheesh }) => {
  window.addEventListener("scroll", () => {
    sheesh(".opacity");
  });

  return (
    <div className={`${styles.parentDiv}`}>
      <span className={`${styles.title}`}>Education</span>
      <div>
        {e.map((text, index) => (
          <div key={index} className={`${styles.content}`}>
            <span className={index === 3 ? "after:hidden" : ""}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  parentDiv: "hero flex flex-col flex-wrap items-center p-5 font-questrial",
  title: "opacity mt-10 text-2xl font-extrabold text-orange-500",
  content: "opacity education text-sm text-orange-500",
};

export default Education;
