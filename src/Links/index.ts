import {
  landingpage,
  notification,
  tip,
  testimonials,
  emailui,
} from "../Assets/index";

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
    url: "https://nickelzon.github.io/notifications-page-main/",
    description:
      "This is my first challenge from Frontend Mentor. After i finished this project, I started working out my UI's to become more responsive.",
  },
  {
    id: 1,
    src: tip,
    title: "Tip Calculator App",
    url: "https://nickelzon.github.io/tip-calculator-app/",
    description:
      "This is also a challenge from Frontend Mentor. It has a simple algorithm that I code to calculate tips, and be able to split the tip base on how many persons.",
  },
  {
    id: 2,
    src: landingpage,
    title: "Sample Landing Page",
    url: "https://nickelzon.github.io/intro-section-with-dropdown-nav/",
    description:
      "Another challenge from Frontend Mentor. This helped me to get a little more idea in layouting websites. Not bad for a first time creating a landingpage right? or It is that bad hmm?",
  },
  {
    id: 3,
    src: testimonials,
    title: "Testimonial API",
    url: "https://nickelzon.github.io/testimonials/",
    description:
      "After learning about fetching data from an API, and undestanding a popular architecture for an API (REST - Representational State Transfer) also known as RESTful API, I started working on this simple project that highlights just one of the method you can do to fetch data (GET).",
  },
  {
    id: 4,
    src: emailui,
    title: "Email UI",
    url: "https://nickelzon.github.io/email-ui-functional-responsive/",
    description:
      "This project is an exam for my application for LOPHILS.INC as React Developer. (Hope they hire meee uwu)",
  },
];

export default NavLinks;
