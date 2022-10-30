import { landingpage, notification, tip } from "../Assets/index";

const NavLinks = [
  { id: 0, title: "Contacts", url: "" },
  { id: 1, title: "Hire Me", url: "" },
  { id: 3, title: "Buy Me A Coffee", url: "" },
];

export const FooterLinks = [
  {
    id: 0,
    title:
      "The information and content provided above is personal and for job application purposes. Email the author to check his credentials.",
    url: "",
  },
  { id: 1, title: "© 2022 Al Nickelzon. Built using React.", url: "" },
];

export const ProjectLinks = [
  {
    id: 0,
    src: notification,
    title: "Notification Page",
    url: "",
    description:
      "This is my first challenge from Frontend Mentor. After i finished this project, I started working out my UI's to become more responsive.",
  },
  {
    id: 1,
    src: tip,
    title: "Tip Calculator App",
    url: "",
    description:
      "This is also a challenge from Frontend Mentor. It has a simple algorithm that I code to calculate tips, and be able to split the tip base on how many persons.",
  },
  {
    id: 2,
    src: landingpage,
    title: "Sample Landing Page",
    url: "",
    description: "This is garbage.",
  },
];

export default NavLinks;
