import { authorphoto } from "../Assets";

const Hero = () => {
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
        <p className="animation-in-3s text-xl">
          Self taught React Developer. Graphic Designer. Over-caffeinated human.
        </p>
      </div>
    </div>
  );
};

export default Hero;
