
import { cn } from "@/lib/utils";

interface TranscriptToggleButtonProps {
  transcriptVisible: boolean;
  onClick: () => void;
}

const TranscriptToggleButton = ({ transcriptVisible, onClick }: TranscriptToggleButtonProps) => {
  return (
    <button
      className={cn(
        "absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
        transcriptVisible ? "bg-blue-600 text-white" : "bg-gray-800/70 text-white hover:bg-gray-700/80"
      )}
      onClick={onClick}
    >
      {transcriptVisible ? "Ukryj transkrypcję" : "Pokaż transkrypcję"}
    </button>
  );
};

export default TranscriptToggleButton;
