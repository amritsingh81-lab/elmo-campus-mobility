import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, MapPin, Leaf, Shield, Building2, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import StepCard from "@/components/StepCard";
import PathwayCard from "@/components/PathwayCard";
import heroIllustration from "@/assets/hero-illustration.jpg";
import studentsIllustration from "@/assets/students-illustration.jpg";
import universitiesIllustration from "@/assets/universities-illustration.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-up">
              <h1 className="text-display mb-6">
                A simpler way to move around campus
              </h1>
              <p className="text-body-large mb-8 max-w-lg">
                Shared electric scooters designed for university campuses in India. 
                Open the app, find a scooter, and go.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="btn-primary">
                  Launching soon
                </span>
                <Link to="/how-it-works" className="btn-secondary">
                  See how it works <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="animate-slide-up delay-200">
              <div className="illustration-container">
                <img
                  src={heroIllustration}
                  alt="Student riding an electric scooter on campus"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Elmo Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <SectionHeader
            eyebrow="What is Elmo"
            title="Campus mobility, simplified"
            centered
          />
          <p className="text-body-large max-w-2xl mx-auto">
            Elmo is a shared electric scooter service built specifically for university campuses. 
            We operate only within campus boundaries, offering students a quick, convenient, 
            and sustainable way to get from one part of campus to another.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            eyebrow="How it works"
            title="Three simple steps"
            description="Getting around campus has never been easier. Here's how Elmo works."
          />
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <StepCard
              number="1"
              title="Open the app"
              description="Download the Elmo app and create your account. It takes less than a minute."
            />
            <StepCard
              number="2"
              title="Find a scooter"
              description="Use the map to locate available scooters on campus. Scan the QR code to unlock."
            />
            <StepCard
              number="3"
              title="Ride responsibly"
              description="Head to your destination and park in designated zones. It's that simple."
            />
          </div>
        </div>
      </section>

      {/* Designed for Campuses Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Designed for campuses"
                title="Built with campus life in mind"
                description="Every aspect of Elmo is designed for the unique needs of university campuses."
              />
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">Safety first</h4>
                    <p className="text-small">Speed-limited vehicles and campus-only operation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">Campus-only</h4>
                    <p className="text-small">Operates within campus boundaries only</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <Leaf size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">Sustainable</h4>
                    <p className="text-small">Electric vehicles for a greener campus</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold mb-1">Predictable</h4>
                    <p className="text-small">Consistent availability when you need it</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="illustration-container">
              <img
                src={studentsIllustration}
                alt="Students on a university campus"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Pathways Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Get started"
            title="Two ways to explore Elmo"
            description="Whether you're a student looking for easy campus transport or a university interested in sustainable mobility, we're here to help."
            centered
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PathwayCard
              title="For Students"
              description="Learn how Elmo can simplify your daily campus commute."
              link="/students"
              illustration={studentsIllustration}
            />
            <PathwayCard
              title="For Universities"
              description="Discover how Elmo can enhance your campus infrastructure."
              link="/universities"
              illustration={universitiesIllustration}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
