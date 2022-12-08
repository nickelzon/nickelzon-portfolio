import { FC } from "react";
import { authorphoto } from "../Assets";

export interface Props {
  herodesc: string[];
}

const Hero: FC<Props> = ({ herodesc }) => {
  return (
    <div className="hero flex h-[100vh] flex-col items-center justify-center p-20 font-questrial text-orange-500 sm:flex-row">
      <div className="flex min-h-[150px] flex-col">
        <h1 className="pulse font-notosans text-4xl font-black tracking-tighter text-white">
          I am Nickelzon.
        </h1>
        <p className="hero-description animation-in-3s max-w-[250px] text-xl">
          {herodesc[0]}
        </p>
      </div>
    </div>
  );
};

export default Hero;
