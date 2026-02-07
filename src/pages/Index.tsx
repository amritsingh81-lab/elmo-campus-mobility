import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Shield, Building2, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import StepCard from "@/components/StepCard";
import PathwayCard from "@/components/PathwayCard";
import heroBackground1 from "@/assets/hero-background.jpg";
import heroBackgroundIndia from "@/assets/hero-background-india.jpg";
import heroElmoScooter from "@/assets/hero-elmo-scooter.jpg";
import studentsIllustration from "@/assets/students-illustration.jpg";
import universitiesIllustration from "@/assets/universities-illustration.jpg";

const heroImages = [heroBackground1, heroBackgroundIndia, heroElmoScooter];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Full Bleed Background with Crossfade */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background images with crossfade */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="container-wide section-padding relative z-10">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-display text-white mb-6">
              A simpler way to move around campus
            </h1>
            <p className="text-body-large text-white/90 mb-8 max-w-lg">
              Shared electric scooters designed for university campuses in India. 
              Open the app, find a scooter, and go.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="btn-primary">
                Launching soon
              </span>
              <Link to="/how-it-works" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 font-medium py-3 px-6 rounded-full inline-flex items-center gap-2 hover:bg-white/30 transition-all">
                See how it works <ArrowRight size={18} />
              </Link>
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
