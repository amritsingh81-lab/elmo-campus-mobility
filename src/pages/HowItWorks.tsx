import { Smartphone, QrCode, Navigation, ParkingCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AppStoreButtons from "@/components/AppStoreButtons";
import appIllustration from "@/assets/app-illustration.jpg";
import mapIllustration from "@/assets/map-illustration.jpg";
import ridingIllustration from "@/assets/riding-illustration.jpg";
import parkingIllustration from "@/assets/parking-illustration.jpg";

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-narrow text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block animate-fade-in">
            How it works
          </span>
          <h1 className="text-display mb-6 animate-slide-up">
            How it Works
          </h1>
          <p className="text-body-large max-w-2xl mx-auto animate-slide-up delay-100">
            Getting started with Elmo takes just minutes. Here's everything you need 
            to know about riding on campus.
          </p>
        </div>
      </section>

      {/* Step 1: Access */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold text-xl">
                  1
                </div>
                <Smartphone className="text-primary" size={28} />
              </div>
              <h2 className="text-headline mb-4">Download the app</h2>
              <p className="text-body-large mb-6">
                Start by downloading the Elmo app on your smartphone. Create an account 
                using your university email, verify your identity, and you're ready to ride.
              </p>
              <ul className="space-y-3 text-body text-muted-foreground mb-6">
                <li>• Available on iOS and Android</li>
                <li>• University email verification required</li>
                <li>• Set up payment method once</li>
              </ul>
              <AppStoreButtons />
            </div>
            <div className="max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              <img
                src={appIllustration}
                alt="Elmo mobile app"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Find */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="illustration-container">
                <img
                  src={mapIllustration}
                  alt="Finding scooters on campus map"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold text-xl">
                  2
                </div>
                <QrCode className="text-primary" size={28} />
              </div>
              <h2 className="text-headline mb-4">Find and unlock</h2>
              <p className="text-body-large mb-6">
                Open the app to see available scooters on the campus map. Walk to a nearby 
                scooter and scan the QR code on the handlebar to unlock it instantly.
              </p>
              <ul className="space-y-3 text-body text-muted-foreground">
                <li>• Real-time availability on the map</li>
                <li>• Scooters at key campus locations</li>
                <li>• Instant QR code unlocking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Ride */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold text-xl">
                  3
                </div>
                <Navigation className="text-primary" size={28} />
              </div>
              <h2 className="text-headline mb-4">Ride safely</h2>
              <p className="text-body-large mb-6">
                Enjoy your ride across campus. Our scooters are speed-limited for safety 
                and designed for campus pathways. Stay aware of pedestrians and follow 
                campus guidelines.
              </p>
              <ul className="space-y-3 text-body text-muted-foreground">
                <li>• Speed-limited for campus safety</li>
                <li>• Stay on designated paths</li>
                <li>• Be mindful of pedestrians</li>
              </ul>
            </div>
            <div className="card-elevated bg-accent/30 p-8">
              <h3 className="text-title mb-4">Riding tips</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">→</span>
                  <span className="text-body">Always look ahead and stay alert</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">→</span>
                  <span className="text-body">Slow down near buildings and crossings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">→</span>
                  <span className="text-body">Yield to pedestrians at all times</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">→</span>
                  <span className="text-body">Avoid riding in rain or wet conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Park */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="card-elevated">
                  <ParkingCircle className="text-primary mb-3" size={24} />
                  <h4 className="font-display font-semibold mb-1">Designated zones</h4>
                  <p className="text-small">Park only in marked Elmo parking areas</p>
                </div>
                <div className="card-elevated">
                  <ParkingCircle className="text-primary mb-3" size={24} />
                  <h4 className="font-display font-semibold mb-1">Upright position</h4>
                  <p className="text-small">Leave the scooter standing on its kickstand</p>
                </div>
                <div className="card-elevated">
                  <ParkingCircle className="text-primary mb-3" size={24} />
                  <h4 className="font-display font-semibold mb-1">Clear pathways</h4>
                  <p className="text-small">Never block entrances or walkways</p>
                </div>
                <div className="card-elevated">
                  <ParkingCircle className="text-primary mb-3" size={24} />
                  <h4 className="font-display font-semibold mb-1">End ride</h4>
                  <p className="text-small">Tap 'End Ride' in the app to lock</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-semibold text-xl">
                  4
                </div>
                <ParkingCircle className="text-primary" size={28} />
              </div>
              <h2 className="text-headline mb-4">Park responsibly</h2>
              <p className="text-body-large mb-6">
                When you reach your destination, park in a designated zone. The app will 
                show you nearby parking areas. End your ride in the app to lock the scooter 
                and complete your trip.
              </p>
              <p className="text-body text-muted-foreground">
                Responsible parking keeps campus pathways clear and ensures scooters are 
                available for the next rider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="text-headline mb-4">Ready to get started?</h2>
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
