
import { Search } from "lucide-react";

interface FaqSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const FaqSearch = ({ searchQuery, onSearchChange }: FaqSearchProps) => {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Szukaj w FAQ..."
        className="w-full py-3 pl-12 pr-4 rounded-xl bg-white border border-gray-200 focus:border-magenta/50 focus:outline-none focus:ring-2 focus:ring-magenta/20 text-gray-800 placeholder:text-gray-400 transition-all"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default FaqSearch;
