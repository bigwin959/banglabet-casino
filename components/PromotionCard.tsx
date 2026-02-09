import Image from "next/image";

interface PromotionCardProps {
  image: string;
  title: string;
  discount: string;
  description: string;
  ctaText: string;
}

const PromotionCard = ({
  image,
  title,
  discount,
  description,
  ctaText,
}: PromotionCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-yellow-500/30 bg-gray-900 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 flex flex-col h-full">

      {/* Background Image Container */}
      <div className="relative w-full aspect-[545/252] shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
        {/* Subtle overlay for image depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Discount Badge - Kept on image for visibility */}
        <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full 
          text-xs font-bold font-heading shadow-lg z-10 animate-pulse">
          {discount} OFF
        </div>
      </div>

      {/* Content Section - Separated below image */}
      <div className="p-5 flex flex-col flex-grow items-start">
        <h3 className="text-xl font-heading font-bold text-white mb-2 uppercase tracking-wide group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 mb-6 text-sm line-clamp-3 font-medium flex-grow">
          {description}
        </p>

        {/* CTA Button */}
        <button className="w-full bg-yellow-500 text-black font-bold uppercase text-xs tracking-wider py-3 rounded hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg mt-auto">
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default PromotionCard;
