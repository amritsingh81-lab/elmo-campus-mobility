import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PathwayCardProps {
  title: string;
  description: string;
  link: string;
  illustration: string;
}

const PathwayCard = ({ title, description, link, illustration }: PathwayCardProps) => {
  return (
    <Link
      to={link}
      className="group block card-elevated hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
    >
      <div className="aspect-[4/3] mb-6 illustration-container overflow-hidden">
        <img
          src={illustration}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-title mb-2">{title}</h3>
      <p className="text-body text-muted-foreground mb-4">{description}</p>
      <span className="btn-text">
        Learn more <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
};

export default PathwayCard;
