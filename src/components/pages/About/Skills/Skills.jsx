import React from "react";
import SkillItem from "./SkillItem";
import { useLanguage } from "../../../../context/LanguageContext";

const Skills = () => {
  const { lang, tk, t } = useLanguage();
  const skillData = t.skills.items.map((row) => ({
    id: row.id,
    percentage: row.percentage,
    title: row[lang],
  }));

  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-100 font-bold mb-4">
              {tk(t.skills.heading)}
            </h3>
          </div>
        </div>
        {skillData.map((skill) => (
          <SkillItem skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
