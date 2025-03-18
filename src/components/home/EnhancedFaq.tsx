
import { useState } from "react";
import FaqSearch from "./FaqSearch";
import FaqCategoryTabs from "./FaqCategoryTabs";
import FaqList from "./FaqList";
import { faqItems, groupFaqItemsByCategory, getCategories } from "./faqData";

const EnhancedFaq = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Wszystkie");

  // Group FAQ items by category
  const groupedFaqItems = groupFaqItemsByCategory(faqItems);
  
  // Get all unique categories
  const categories = getCategories(groupedFaqItems);

  const toggleItem = (question: string) => {
    setOpenItem(openItem === question ? null : question);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const filteredItems = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Wszystkie" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/40d3d0c0-d9e2-43e5-9bcf-32769ef968df.png')] bg-cover bg-center opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            FAQ - Najczęściej zadawane pytania
          </h2>
          <p className="text-gray-600 text-lg">
            Masz pytania? Znajdziesz tutaj odpowiedzi na najczęściej zadawane pytania!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search bar */}
          <FaqSearch 
            searchQuery={searchQuery} 
            onSearchChange={handleSearchChange} 
          />

          {/* Category tabs */}
          <FaqCategoryTabs 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          {/* FAQ items */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-200 overflow-hidden">
            <FaqList 
              items={filteredItems}
              openItem={openItem}
              onToggleItem={toggleItem}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedFaq;
