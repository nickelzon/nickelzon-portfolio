import { authorphoto } from "../Assets";

const Hero = () => {
  return (
    <div className="hero flex justify-center font-questrial">
      <div className="flex flex-col items-center justify-center text-orange-500 ss:flex-row">
        <div
          className={`author h-96 w-[220px] xs:w-[250px] ss:w-[350px] sm:w-[650px]`}
        />
        <div className="max-w-sm p-4">
          <h1 className="text-6xl font-extrabold">Hello World!</h1>
          <p>
            I am a Computer Science graduate, who is passionate at my
            profession, motivated and hardworking future employee that is able
            to manage a fast-paced workplace, and able to finish the tasks on
            time even though in lesser supervisions. I will be committed to my
            job, build strong relationship with my supervisors and co-workers so
            that we can work together as a team with high cooperation with one
            another.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
