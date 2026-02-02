import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="card-bordered group hover:border-primary/20 transition-colors duration-300">
      <div className="feature-icon mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-subtitle mb-2">{title}</h3>
      <p className="text-body text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
