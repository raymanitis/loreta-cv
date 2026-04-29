import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useLanguage } from "../../../context/LanguageContext";

const Contact = () => {
  const { tk, t } = useLanguage();

  const contactDetails = [
    {
      label: tk(t.contact.phone),
      value: "+371 20 654 178",
      href: "tel:+37120654178",
      icon: FaPhone,
    },
    {
      label: tk(t.contact.email),
      value: "loreta.lujane@gmail.com",
      href: "mailto:loreta.lujane@gmail.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <section className="pb-10">
      <div className="md:px-4">
        <div className="md:mx-4">
          <h3 className="text-2xl text-gray-100 font-bold mb-2">{tk(t.contact.heading)}</h3>
          <p className="text-sm text-gray-400 mb-8 max-w-xl">{tk(t.contact.intro)}</p>
          <div className="flex flex-wrap -mx-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.href} className="w-full md:w-1/2 px-3 mb-6">
                  <a
                    href={item.href}
                    className="flex items-start p-6 bg-gray-800 rounded-md shadow-md border border-gray-700 hover:border-baby-500 transition-colors"
                  >
                    <span className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-md bg-gray-700 text-baby-300 text-2xl">
                      <Icon aria-hidden />
                    </span>
                    <div className="ml-4 pt-1 min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-gray-500 mb-1">
                        {item.label}
                      </span>
                      <span className="text-gray-100 font-medium text-lg break-all">
                        {item.value}
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
