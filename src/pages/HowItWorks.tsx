import { Smartphone, MapPin, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Smartphone,
      title: "Open the app",
      description: "Download Elmo and sign up with your university email.",
    },
    {
      number: "2",
      icon: MapPin,
      title: "Find a scooter on campus",
      description: "See available scooters on the map and scan to unlock.",
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Ride and park responsibly",
      description: "Enjoy your ride and park in designated zones.",
    },
  ];

  const goodToKnow = [
    "Available on campus only",
    "Speed-limited for safety",
    "Park in designated zones",
    "Follow campus guidelines",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding-sm">
        <div className="container-narrow text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block animate-fade-in">
            How it works
          </span>
          <h1 className="text-display mb-6 animate-slide-up">
            Three simple steps
          </h1>
          <p className="text-body-large max-w-xl mx-auto animate-slide-up delay-100">
            Getting around campus has never been easier. Here's how Elmo works.
          </p>
        </div>
      </section>

      {/* 3-Step Process Block */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step number circle */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-4xl md:text-5xl mb-6 shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <step.icon className="text-primary" size={24} />
                </div>
                
                {/* Content */}
                <h3 className="text-subtitle mb-2">{step.title}</h3>
                <p className="text-body text-muted-foreground max-w-xs">
                  {step.description}
                </p>

                {/* Connector line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 md:top-12 left-[60%] w-[80%] h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good to Know Section */}
      <section className="section-padding-sm bg-card">
        <div className="container-narrow">
          <div className="card-elevated text-center">
            <h2 className="text-title mb-6">Good to know</h2>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
              {goodToKnow.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-body text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm">
        <div className="container-narrow text-center">
          <h2 className="text-headline mb-4">Ready to ride?</h2>
          <p className="text-body-large mb-8">
            Elmo is launching soon on select university campuses across India.
          </p>
          <span className="btn-primary">
            Launching soon
          </span>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
