import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  centered?: boolean;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  ctaText,
  ctaLink,
  centered = false,
}: SectionHeaderProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {eyebrow && (
        <span className="text-primary font-medium text-sm uppercase tracking-wider mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-headline mb-4">{title}</h2>
      {description && (
        <p className="text-body-large">{description}</p>
      )}
      {ctaText && ctaLink && (
        <Link to={ctaLink} className="btn-text mt-6 inline-flex">
          {ctaText} <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
