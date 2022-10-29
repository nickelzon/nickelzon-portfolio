export interface Props {
  sheesh: any;
}

const Education = ({ sheesh }: Props) => {
  sheesh();

  return (
    <div className="hero flex flex-col flex-wrap items-center p-5 font-questrial">
      <span className="opacity mt-10 text-2xl font-extrabold text-orange-500">
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
