import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import profile from "../../../images/profile.jpg";
import { useLanguage } from "../../../context/LanguageContext";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/share/1F6HVN7tGo/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/loretaowo?igsh=NGt1MWFzdWdpcThp",
    label: "Instagram",
  },
];

const Sidebar = () => {
  const { tk, t } = useLanguage();
  const s = t.sidebar;

  return (
    <aside className="sticky top-0 bg-gray-800 border border-gray-700 md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img
          src={profile}
          alt={tk(s.profileAlt)}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-100 font-bold mb-4">Loreta Lujāne</h1>
        <a
          href="#0"
          className="inline-block mb-6 rounded bg-baby-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-baby-800"
          download="Resume"
        >
          {tk(s.downloadResume)}
        </a>
        <ul className="flex flex-wrap justify-center gap-1">
          {socials.map((social) => (
            <SocialIcon social={social} key={social.id} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link, label } = props.social;
  const isExternal =
    typeof link === "string" &&
    (link.startsWith("http://") || link.startsWith("https://"));
  return (
    <li className="m-2">
      <a
        href={link}
        aria-label={label}
        className="w-10 h-10 bg-gray-700 rounded text-baby-300 flex items-center justify-center hover:text-white hover:bg-baby-600 transition-colors"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {icon}
      </a>
    </li>
  );
};
