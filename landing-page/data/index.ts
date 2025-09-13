import f1 from "../assets/images/f1.svg";
import f2 from "../assets/images/f2.svg";
import f3 from "../assets/images/f3.svg";
import f4 from "../assets/images/f4.svg";
import f5 from "../assets/images/f5.svg";
import n1 from "../assets/images/n1.png";
import n2 from "../assets/images/n2.png";
import n3 from "../assets/images/n3.png";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";

export const navItems = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/" },
  { title: "Blog", link: "/" },
  { title: "Contact", link: "/" },
  { title: "Offers", link: "/" },
];

export const features = [
  {
    icon: f1,
    title: "Free Delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.",
  },
  {
    icon: f2,
    title: "100% secure payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.",
  },
  {
    icon: f3,
    title: "Quality guarantee",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.",
  },
  {
    icon: f4,
    title: "guaranteed savings",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.",
  },
  {
    icon: f5,
    title: "Daily offers",
    description: "Lorem ipsum dolor sit amet, consectetur adipi elit. ipsum dolor sit amet.",
  },
];

export const arrivals = [
  { image: n1, title: "Study Table set", price: "$120.00" },
  { image: n2, title: "Study Table set", price: "$120.00" },
  { image: n3, title: "Study Table set", price: "$120.00" },
];

export const footerLinks = [
  {
    title: "Quick links",
    items: [
      { title: "Home", link: "/" },
      { title: "About us", link: "/" },
      { title: "Offers", link: "/" },
      { title: "Services", link: "/" },
      { title: "Contact us", link: "/" },
    ],
  },
  {
    title: "About",
    items: [
      { title: "How It Works", link: "/" },
      { title: "Our Packages", link: "/" },
      { title: "Promotions", link: "/" },
      { title: "Refer A Friend", link: "/" },
    ],
  },
  {
    title: "Help Center",
    items: [
      { title: "Payments", link: "/" },
      { title: "Shipping", link: "/" },
      { title: "Product", link: "/" },
      { title: "Returns", link: "/" },
      { title: "FAQs", link: "/" },
      { title: "Checkout", link: "/" },
      { title: "Other Issues", link: "/" },
    ],
  },
];

export const categories = [
  { image: c1, label: "Living room", width: "xl:w-[65%]" },
  { image: c2, label: "Bedroom", width: "xl:w-[35%]" },
  { image: c3, label: "Kitchen", width: "xl:w-[65%]" },
  { image: c4, label: "Offices", width: "xl:w-[50%]" },
];
