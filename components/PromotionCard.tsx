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
    <div className="card group relative overflow-hidden">
      {/* Discount Badge */}
      <div className="absolute top-4 right-4 bg-cta text-white px-3 py-1 rounded-full 
        text-sm font-bold neon-glow-cta z-10">
        {discount}
      </div>

      {/* Image */}
      <div className="relative w-full h-40 bg-gradient-to-br from-cta/20 to-primary/20 
        rounded-lg mb-4 overflow-hidden">
        
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />

        {/* Optional placeholder overlay (remove if you want) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-5xl opacity-10">🎁</div>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-heading text-primary mb-2 group-hover:neon-glow transition-all">
        {title}
      </h3>
      <p className="text-text/70 mb-4 text-sm line-clamp-2">{description}</p>

      {/* CTA Button */}
      <button className="btn-primary w-full neon-glow-cta">
        {ctaText}
      </button>
    </div>
  );
};

export default PromotionCard;
