import { Gamepad2 } from "lucide-react";

interface AgentCardProps {
    logo: string;
    name: string;
    description: string;
    gameCount: number;
}

const AgentCard = ({ logo, name, description, gameCount }: AgentCardProps) => {
    return (
        <div className="card group text-center">
            {/* Logo Placeholder */}
            <div className="relative w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 
                      rounded-full flex items-center justify-center border-2 border-primary/20
                      group-hover:border-primary/40 transition-colors">
                <Gamepad2 size={48} className="text-primary" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-heading text-primary mb-2 group-hover:neon-glow transition-all">
                {name}
            </h3>
            <p className="text-text/70 mb-4 text-sm">{description}</p>

            {/* Game Count Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                <Gamepad2 size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">
                    {gameCount}+ Games
                </span>
            </div>
        </div>
    );
};

export default AgentCard;
