import { Building2, Leaf, Shield, XCircle } from "lucide-react";
import Layout from "@/components/Layout";
import aboutCampusIllustration from "@/assets/about-campus-illustration.jpg";
import partnershipIllustration from "@/assets/partnership-illustration.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-narrow text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block animate-fade-in">
            About us
          </span>
          <h1 className="text-display mb-8 animate-slide-up">
            About us
          </h1>
          <p className="text-body-large max-w-2xl mx-auto animate-slide-up delay-100">
            Elmo is a European micro-mobility operator with operations in Sweden, Germany, 
            and the United Kingdom. With deep experience building mobility solutions for modern 
            cities, we understand the complexities of urban environments—and we bring that 
            expertise to university campuses in India.
          </p>
        </div>
      </section>

      {/* Illustration divider */}
      <section className="container-wide py-12">
        <div className="illustration-container max-w-4xl mx-auto">
          <img
            src={aboutCampusIllustration}
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
              Having operated across some of Europe's most challenging urban environments, 
              we know what it takes to run safe and efficient shared mobility. University 
              campuses offer a focused setting where that experience can be applied with 
              even greater precision.
            </p>
            <p className="text-body text-muted-foreground">
              Campuses are self-contained environments with clear boundaries, defined pathways, 
              and predictable travel patterns. This structure allows us to deliver a level of 
              service and safety that draws on everything we've learned in cities like Stockholm, 
              Berlin, and London.
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
                  We bring years of operational experience from European cities to every 
                  campus we serve. Rather than deploying broadly and reacting to problems, 
                  we begin with controlled pilots in partnership with university administration.
                </p>
                <p className="text-body text-muted-foreground">
                  Each deployment is tailored to the specific campus—its layout, its 
                  policies, and its community. The same rigour we apply to navigating 
                  complex city regulations in Europe is brought to defining operating zones, 
                  parking areas, and usage guidelines on campus.
                </p>
                <p className="text-body text-muted-foreground">
                  Elmo manages all operations directly. Maintenance, charging, redistribution, 
                  and user support are handled by our team, not transferred to the institution.
                </p>
              </div>
            </div>
            <div className="illustration-container">
              <img
                src={partnershipIllustration}
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
            Built on European experience. Focused on Indian campuses. 
            Committed to building something lasting.
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
