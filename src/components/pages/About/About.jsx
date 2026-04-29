import React from "react";
import Skills from "./Skills/Skills";
import { useLanguage } from "../../../context/LanguageContext";

const About = () => {
  const { lang, tk, t } = useLanguage();
  const paragraphs = t.about.paragraphs[lang];

  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-100 font-bold mb-6">
              {tk(t.about.title)}
            </h3>
            <div
              className="text-sm text-gray-400 leading-relaxed space-y-3 mb-6"
              lang={lang === "lv" ? "lv" : "en"}
            >
              {paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
