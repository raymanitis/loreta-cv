import React from "react";

const SkillItem = (props) => {
  const { title, percentage } = props.skill;
  return (
    <div className="w-full md:w-1/2">
      <div className="mb-4 md:mx-4">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h5 className="text-md text-gray-400 font-light pr-2">{title}</h5>
          <span className="text-md text-baby-400 font-bold shrink-0">
            {percentage}
          </span>
        </div>
        <div className="w-full bg-gray-700 relative h-2 rounded">
          <div
            className="absolute h-full left-0 top-0 bg-baby-500 rounded"
            style={{ width: `${percentage}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
