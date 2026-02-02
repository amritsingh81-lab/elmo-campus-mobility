import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Users, Wrench, BarChart, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import universitiesIllustration from "@/assets/universities-illustration.jpg";

const Universities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-up">
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                For Universities
              </span>
              <h1 className="text-display mb-6">
                Sustainable mobility for your campus
              </h1>
              <p className="text-body-large mb-8">
                Partner with Elmo to bring a modern, managed micromobility solution 
                to your university. We handle operations, you enjoy the benefits.
              </p>
              <Link to="/contact" className="btn-primary">
                Explore a campus pilot <ArrowRight size={18} />
              </Link>
            </div>
            <div className="animate-slide-up delay-200">
              <div className="illustration-container">
                <img
                  src={universitiesIllustration}
                  alt="University campus with Elmo scooters"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Campus Mobility Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="The opportunity"
            title="Why campus mobility matters"
            centered
          />
          <p className="text-body-large text-center max-w-2xl mx-auto mb-12">
            Large university campuses present unique mobility challenges. Students walk long 
            distances, internal vehicle traffic creates congestion, and traditional transport 
            options often fall short. Shared electric scooters offer a practical solution.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mx-auto mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-subtitle mb-2">Cleaner transport</h3>
              <p className="text-small">
                Reduce internal vehicle emissions and promote sustainable commuting habits.
              </p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-subtitle mb-2">Better experience</h3>
              <p className="text-small">
                Give students a convenient, modern way to navigate campus life.
              </p>
            </div>
            <div className="text-center">
              <div className="feature-icon mx-auto mb-4">
                <BarChart size={24} />
              </div>
              <h3 className="text-subtitle mb-2">Less congestion</h3>
              <p className="text-small">
                Reduce reliance on personal vehicles and crowded shuttle services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Our approach"
            title="Pilot-first, partnership-driven"
            description="We believe in starting small and proving value. Elmo works closely with university administration to design a controlled rollout that fits your campus."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated">
              <h3 className="text-title mb-4">Controlled rollout</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span className="text-body">Start with a pilot in specific campus zones</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span className="text-body">Define geofenced operating boundaries</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span className="text-body">Set designated parking zones together</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span className="text-body">Establish usage guidelines and policies</span>
                </li>
              </ul>
            </div>
            <div className="card-elevated">
              <h3 className="text-title mb-4">Fully managed service</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span className="text-body">Elmo handles all operations and logistics</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span className="text-body">Regular maintenance by our on-campus team</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span className="text-body">User support and issue resolution</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span className="text-body">Usage reporting and insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Benefits"
            title="What Elmo brings to your campus"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-bordered">
              <Leaf className="text-primary mb-4" size={28} />
              <h3 className="text-subtitle mb-2">Cleaner air</h3>
              <p className="text-small">
                Electric scooters mean fewer emissions within campus boundaries.
              </p>
            </div>
            <div className="card-bordered">
              <Users className="text-primary mb-4" size={28} />
              <h3 className="text-subtitle mb-2">Reduced traffic</h3>
              <p className="text-small">
                Less internal vehicle movement and parking pressure.
              </p>
            </div>
            <div className="card-bordered">
              <Wrench className="text-primary mb-4" size={28} />
              <h3 className="text-subtitle mb-2">Zero hassle</h3>
              <p className="text-small">
                We manage everything from deployment to maintenance.
              </p>
            </div>
            <div className="card-bordered">
              <BarChart className="text-primary mb-4" size={28} />
              <h3 className="text-subtitle mb-2">Improved experience</h3>
              <p className="text-small">
                A modern amenity that enhances student satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-headline mb-4">Interested in a campus pilot?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
            We'd love to discuss how Elmo can work for your university. 
            Reach out to start the conversation.
          </p>
          <Link to="/contact" className="btn-secondary bg-background text-foreground hover:bg-background/90">
            Get in touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Universities;
