
import FaqItem from "./FaqItem";
import { FaqItemProps } from "./FaqItem";

export interface FaqData {
  question: string;
  answer: string;
  category?: string;
}

interface FaqListProps {
  items: FaqData[];
  openItem: string | null;
  onToggleItem: (question: string) => void;
}

const FaqList = ({ items, openItem, onToggleItem }: FaqListProps) => {
  if (items.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Nie znaleziono odpowiedzi na Twoje pytanie.</p>
        <p className="text-magenta mt-2">Skontaktuj się z nami bezpośrednio na info@toknowai.pl</p>
      </div>
    );
  }

  return (
    <>
      {items.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          category={item.category}
          isOpen={openItem === item.question}
          onToggle={() => onToggleItem(item.question)}
        />
      ))}
    </>
  );
};

export default FaqList;
