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
    <div className="hero flex flex-col flex-wrap items-center p-5 font-questrial">
      <span className="opacity mt-10 text-2xl font-extrabold text-orange-500">
        Education
      </span>
      {e.map((text, index) => (
        <div key={index} className="opacity education text-lg text-orange-500">
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
};

export default Education;
