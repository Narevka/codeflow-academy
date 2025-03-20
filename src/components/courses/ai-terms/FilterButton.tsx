
import React from "react";

interface FilterButtonProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const FilterButton = ({ id, label, isActive, onClick }: FilterButtonProps) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`px-3 py-2 rounded-md transition-colors font-medium ${
        isActive
          ? "bg-magenta text-white"
          : "bg-magenta/10 text-magenta hover:bg-magenta/20"
      }`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
