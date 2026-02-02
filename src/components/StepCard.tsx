interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold text-lg">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-subtitle mb-1">{title}</h3>
        <p className="text-body text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
