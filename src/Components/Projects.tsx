import { ProjectLinks } from "../Links";

const Projects = () => {
  return (
    <div className="hero flex w-full flex-col items-center font-questrial">
      <h1 className="my-20 text-2xl font-extrabold text-orange-500">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {ProjectLinks.map((link: any, index: any) => (
          <div
            key={link.id}
            className={`grid-items flex max-w-sm flex-col rounded-sm bg-slate-200`}
          >
            <img src={link.src} alt={link.src} className={`max-w-sm`} />

            <span className="p-7">
              <h1 className="text-2xl font-bold">{link.title}</h1>
              <br />
              {link.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
