import { FooterLinks } from "../Links";

const Footer = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-center bg-orange-600 p-6">
      <ul className="text-center font-questrial text-base text-black">
        {FooterLinks.map((links: any, index) => (
          <li key={links.id}>{links.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
