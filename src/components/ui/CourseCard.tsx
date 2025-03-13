
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  studentsCount: number;
  features: string[];
}

const CourseCard = ({
  id,
  title,
  description,
  price,
  originalPrice,
  image,
  rating,
  studentsCount,
  features,
}: CourseCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pl-PL", {
      style: "currency",
      currency: "PLN",
    }).format(price);
  };

  return (
    <div className="course-card overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 md:h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-lg" />
      </div>

      <div className="p-6 flex-grow">
        <div className="flex items-center mb-2 text-white/80 text-sm">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" fill="#FACC15" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <span className="mx-2">•</span>
          <span>{studentsCount} studentów</span>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white/70 mb-4 line-clamp-2">{description}</p>

        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <span className="mr-2 text-magenta mt-0.5">
                <Check size={16} />
              </span>
              <span className="text-white/80 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <div className="flex items-center mb-4">
          <span className="text-2xl font-bold text-white">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="ml-2 text-white/60 line-through text-sm">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        <Link
          to={`/offer/${id}`}
          className="btn-primary w-full flex items-center justify-center"
        >
          Dowiedz się więcej
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
