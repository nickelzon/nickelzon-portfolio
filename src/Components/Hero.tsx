const Hero = () => {
  return (
    <div className="hero flex justify-center font-questrial">
      <div className="flex flex-col items-center justify-center text-orange-500 ss:flex-row">
        <div
          className={`author h-96 w-[220px] xs:w-[250px] ss:w-[350px] sm:w-[650px]`}
        />
        <div className="max-w-sm p-4">
          <h1 className="text-4xl font-black text-white">I am Al Nickelzon.</h1>
          <p className="text-xl">
            Self taught React Developer. Graphic Designer. Over-caffeinated
            human.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
