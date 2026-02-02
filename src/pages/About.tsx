import { Building2, Leaf, Shield, XCircle } from "lucide-react";
import Layout from "@/components/Layout";
import heroIllustration from "@/assets/hero-illustration.jpg";
import studentsIllustration from "@/assets/students-illustration.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-narrow text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block animate-fade-in">
            About Elmo
          </span>
          <h1 className="text-display mb-8 animate-slide-up">
            A shared electric scooter service designed for campuses
          </h1>
          <p className="text-body-large max-w-2xl mx-auto animate-slide-up delay-100">
            Elmo operates shared electric scooters exclusively on university campuses in India. 
            We work within controlled, private environments where safety, order, and sustainability 
            can be maintained from the start.
          </p>
        </div>
      </section>

      {/* Illustration divider */}
      <section className="container-wide py-12">
        <div className="illustration-container max-w-4xl mx-auto">
          <img
            src={heroIllustration}
            alt="Campus mobility"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Why Campuses Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-headline mb-6">Why campuses</h2>
          <div className="space-y-6">
            <p className="text-body-large">
              University campuses are self-contained environments with clear boundaries, 
              defined pathways, and predictable travel patterns. Students move between 
              hostels, classrooms, libraries, and dining halls in regular, repeatable ways.
            </p>
            <p className="text-body text-muted-foreground">
              This structure creates an opportunity to introduce shared mobility in a 
              responsible manner—where usage can be monitored, behaviour can be guided, 
              and operations can be managed carefully.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-start">
              <div className="feature-icon mb-4">
                <Building2 size={20} />
              </div>
              <h3 className="font-display font-semibold mb-2">Contained environments</h3>
              <p className="text-small">
                Clear boundaries and controlled access points.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="feature-icon mb-4">
                <Shield size={20} />
              </div>
              <h3 className="font-display font-semibold mb-2">Predictable patterns</h3>
              <p className="text-small">
                Regular travel between known destinations.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="feature-icon mb-4">
                <Leaf size={20} />
              </div>
              <h3 className="font-display font-semibold mb-2">Responsible introduction</h3>
              <p className="text-small">
                Structured rollout with oversight and guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Elmo Approaches Mobility Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-headline mb-6">How Elmo approaches mobility</h2>
              <div className="space-y-6">
                <p className="text-body-large">
                  Elmo takes a campus-first approach. Rather than deploying broadly and 
                  reacting to problems, we begin with controlled pilots in partnership 
                  with university administration.
                </p>
                <p className="text-body text-muted-foreground">
                  Each deployment is tailored to the specific campus—its layout, its 
                  policies, and its community. We define operating zones, establish 
                  parking areas, and set clear usage guidelines before a single scooter 
                  is placed.
                </p>
                <p className="text-body text-muted-foreground">
                  Elmo manages all operations directly. Maintenance, charging, redistribution, 
                  and user support are handled by our team, not transferred to the institution.
                </p>
              </div>
            </div>
            <div className="illustration-container">
              <img
                src={studentsIllustration}
                alt="Campus environment"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Elmo Is Not Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-headline mb-6">What Elmo is not</h2>
          <p className="text-body-large mb-8">
            To be clear about our scope and intent:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start card-bordered">
              <XCircle className="text-muted-foreground flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-display font-semibold mb-1">Not a public street service</h3>
                <p className="text-body text-muted-foreground">
                  Elmo does not operate on public roads or city streets. Our scooters are 
                  designed and deployed exclusively within campus boundaries.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start card-bordered">
              <XCircle className="text-muted-foreground flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-display font-semibold mb-1">Not city-wide deployment</h3>
                <p className="text-body text-muted-foreground">
                  We do not scatter scooters across urban areas. Each deployment is 
                  limited to a specific, agreed-upon campus environment.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start card-bordered">
              <XCircle className="text-muted-foreground flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-display font-semibold mb-1">Not unregulated free-floating mobility</h3>
                <p className="text-body text-muted-foreground">
                  Every Elmo deployment follows structured guidelines, designated zones, 
                  and operational accountability. Nothing is left to chance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <p className="text-headline max-w-2xl mx-auto">
            Elmo is focused on university campuses, with a long-term view toward 
            building something lasting.
          </p>
          <p className="text-body-large mt-6 text-muted-foreground">
            Launching soon on select campuses.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
