import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EngagementCardProps {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

const EngagementCard = ({
    image,
    title,
    description,
    buttonText,
    buttonLink,
}: EngagementCardProps) => {
    return (
        <div className="card group">
            {/* Image Placeholder */}
            <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 
                      rounded-lg mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🎰</div>
                </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-heading text-primary mb-2 group-hover:neon-glow transition-all">
                {title}
            </h3>
            <p className="text-text/70 mb-4 text-sm line-clamp-3">{description}</p>

            {/* CTA Button */}
            <Link href={buttonLink}>
                <button className="btn-secondary w-full flex items-center justify-center space-x-2 group-hover:glitch">
                    <span>{buttonText}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </Link>
        </div>
    );
};

export default EngagementCard;
