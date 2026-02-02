import { Shield, Smartphone, MapPin, Clock, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AppStoreButtons from "@/components/AppStoreButtons";
import studentsIllustration from "@/assets/students-illustration.jpg";
import appIllustration from "@/assets/app-illustration.jpg";

const Students = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-up">
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                For Students
              </span>
              <h1 className="text-display mb-6">
                Move around campus, effortlessly
              </h1>
              <p className="text-body-large mb-8">
                Whether you're heading to class, the library, or meeting friends across campus, 
                Elmo gets you there quickly and easily. No more long walks or waiting for shuttles.
              </p>
              <span className="btn-primary">
                Launching soon on select campuses
              </span>
            </div>
            <div className="animate-slide-up delay-200">
              <div className="illustration-container">
                <img
                  src={studentsIllustration}
                  alt="Students using Elmo scooters on campus"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Why Elmo"
            title="Designed for your daily campus life"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-bordered text-center">
              <div className="feature-icon mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-subtitle mb-2">Quick trips</h3>
              <p className="text-body text-muted-foreground">
                Perfect for short trips between buildings, hostels, and facilities.
              </p>
            </div>
            <div className="card-bordered text-center">
              <div className="feature-icon mx-auto mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-subtitle mb-2">App-based access</h3>
              <p className="text-body text-muted-foreground">
                Unlock, ride, and pay all through the Elmo app. Simple and cashless.
              </p>
            </div>
            <div className="card-bordered text-center">
              <div className="feature-icon mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-subtitle mb-2">Always nearby</h3>
              <p className="text-body text-muted-foreground">
                Scooters available at key locations across campus, when you need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="max-w-sm mx-auto">
                <img
                  src={appIllustration}
                  alt="Elmo mobile app"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeader
                eyebrow="The app"
                title="Everything in your pocket"
              />
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-body">Find available scooters on an interactive campus map</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-body">Scan the QR code to unlock instantly</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-body">Track your ride history and usage</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-body">Easy digital payments, no cash needed</span>
                </li>
              </ul>
              <div className="mt-6">
                <AppStoreButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Safety"
            title="Your safety comes first"
            centered
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-elevated">
              <div className="feature-icon mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-subtitle mb-2">Campus-only riding</h3>
              <p className="text-body text-muted-foreground">
                Elmo scooters are designed to operate only within campus boundaries, 
                away from public traffic.
              </p>
            </div>
            <div className="card-elevated">
              <div className="feature-icon mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-subtitle mb-2">Speed-limited vehicles</h3>
              <p className="text-body text-muted-foreground">
                Our scooters are speed-limited for campus environments, 
                ensuring safe riding for everyone.
              </p>
            </div>
            <div className="card-elevated">
              <div className="feature-icon mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-subtitle mb-2">Clear parking zones</h3>
              <p className="text-body text-muted-foreground">
                Designated parking areas keep scooters organized and 
                pathways clear for pedestrians.
              </p>
            </div>
            <div className="card-elevated">
              <div className="feature-icon mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-subtitle mb-2">Regular maintenance</h3>
              <p className="text-body text-muted-foreground">
                Every scooter is regularly inspected and maintained by 
                our on-campus team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-headline mb-4">Ready to ride?</h2>
          <p className="text-xl opacity-90 mb-8">
            Elmo is launching soon on select university campuses across India.
          </p>
          <span className="btn-secondary bg-background text-foreground hover:bg-background/90">
            Launching soon on select campuses
          </span>
        </div>
      </section>
    </Layout>
  );
};

export default Students;
