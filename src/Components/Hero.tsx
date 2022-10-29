import { authorphoto } from "../Assets";

export interface Props {
  herodesc: any;
}

const Hero = ({ herodesc }: Props) => {
  return (
    <div className="hero flex flex-col items-center justify-center p-20 font-questrial text-orange-500 sm:flex-row">
      <img
        src={authorphoto}
        alt={authorphoto}
        className="author mb-10 max-w-[250px] rounded-full ss:max-w-[450px] sm:mb-0 sm:mr-10"
      />
      <div className="flex flex-col justify-center">
        <h1 className="pulse text-4xl font-black text-white">
          I am Al Nickelzon.
        </h1>
        <p className="hero-description animation-in-3s text-xl">
          {herodesc[0]}
        </p>
      </div>
    </div>
  );
};

export default Hero;
