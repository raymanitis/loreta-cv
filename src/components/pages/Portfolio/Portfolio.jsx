import React from "react";
import PortfolioItem from "./PortfolioItem";
import { useLanguage } from "../../../context/LanguageContext";

const Portfolio = () => {
  const { lang, tk, t } = useLanguage();
  const { heading, subheading, jobs } = t.work;

  const localizedJobs = jobs.map((job) => ({
    id: job.id,
    ...job[lang],
  }));

  return (
    <section className="pb-10">
      <div className="md:px-4 md:mx-4 mb-8">
        <h2 className="text-2xl text-gray-100 font-bold mb-2">{tk(heading)}</h2>
        <p className="text-sm text-gray-400 max-w-2xl">{tk(subheading)}</p>
      </div>
      <div className="flex flex-wrap md:px-4">
        {localizedJobs.map((job) => (
          <PortfolioItem job={job} key={job.id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
