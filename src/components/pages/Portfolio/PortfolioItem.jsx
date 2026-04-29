import React from "react";

const PortfolioItem = (props) => {
  const { company, role, period, summary } = props.job;

  return (
    <div className="w-full">
      <article className="my-3 md:mx-4 p-6 rounded-md bg-gray-800 border border-gray-700 shadow hover:border-baby-700/50 transition-colors">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-100">{company}</h3>
            <p className="text-baby-400 font-medium mt-1">{role}</p>
          </div>
          <span className="shrink-0 text-sm px-3 py-1 rounded-md bg-gray-700 text-gray-200 border border-gray-600">
            {period}
          </span>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">{summary}</p>
      </article>
    </div>
  );
};

export default PortfolioItem;
