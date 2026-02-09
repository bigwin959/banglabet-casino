import Image from "next/image";
import Link from "next/link";

interface PromotionCardProps {
  image: string;
  title: string;
  discount: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
}

const PromotionCard = ({
  image,
  title,
  discount,
  description,
  ctaText,
  ctaLink = "#",
}: PromotionCardProps) => {
  return (
    <div className="group relative flex flex-col h-full bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(255,228,145,0.1)]">
      
      {/* Visual Header */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          priority
        />
        
        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        {/* Floating Badge */}
        <div className="absolute top-6 right-6">
          <div className="bg-primary/90 backdrop-blur-md text-black text-[10px] font-black px-4 py-2 rounded-full uppercase italic tracking-tighter shadow-xl animate-pulse">
            {discount} OFF
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center space-x-3 mb-4">
          <span className="w-8 h-0.5 bg-primary" />
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Exclusive Access</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 uppercase font-heading tracking-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 mb-8 text-sm leading-relaxed font-medium line-clamp-2">
          {description}
        </p>

        {/* Action Area */}
        <div className="mt-auto">
          <Link href={ctaLink} className="btn-primary w-full !rounded-2xl !py-4 shadow-xl shadow-primary/10 block text-center">
            {ctaText}
          </Link>
          
          <div className="mt-4 flex items-center justify-center space-x-2 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            <span className="w-1 h-1 bg-primary rounded-full" />
            <span>BigWin959 Verified Offer</span>
            <span className="w-1 h-1 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;

