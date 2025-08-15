import React from "react";

const ProjectTab = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-text-middle border-primary-500"
    : "text-text-dark border-[#545252] hover:border-white";
  return (
    <button
      className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTab;
