
interface FaqCategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FaqCategoryTabs = ({ categories, activeCategory, onCategoryChange }: FaqCategoryTabsProps) => {
  return (
    <div className="mb-8 overflow-x-auto scrollbar-none pb-2">
      <div className="flex space-x-2 min-w-max">
        <button
          className={`px-4 py-2 rounded-lg transition-all ${
            activeCategory === "Wszystkie"
              ? "bg-magenta text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => onCategoryChange("Wszystkie")}
        >
          Wszystkie
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeCategory === category
                ? "bg-magenta text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FaqCategoryTabs;
