import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            title="Pricing"
            description="Simple, transparent access to campus mobility. Here's how it works."
            centered
          />
        </div>
      </section>

      {/* How Pricing Works */}
      <section className="section-padding-sm bg-muted/30">
        <div className="container-narrow">
          <h2 className="text-headline-sm mb-6">How pricing works</h2>
          <p className="text-body-large text-muted-foreground mb-4">
            Elmo operates on a straightforward pricing model designed for everyday campus use. 
            Whether you need a quick ride across campus or regular access throughout the day, 
            our pricing adapts to how you move.
          </p>
          <p className="text-body text-muted-foreground">
            All rides are paid through the Elmo app. You'll always see the applicable rate 
            before starting a ride, so there are no surprises.
          </p>
        </div>
      </section>

      {/* Flexible Access */}
      <section className="section-padding-sm bg-background">
        <div className="container-narrow">
          <h2 className="text-headline-sm mb-6">Flexible access on campus</h2>
          <p className="text-body-large text-muted-foreground mb-4">
            Choose the option that fits your routine. Single rides are available for occasional 
            trips, while ride passes offer convenient access for more frequent use.
          </p>
          <p className="text-body text-muted-foreground">
            Pricing and pass options may vary depending on your campus. Each university works 
            with Elmo to define access options that suit their environment and community.
          </p>
        </div>
      </section>

      {/* Where to Find Pricing */}
      <section className="section-padding-sm bg-muted/30">
        <div className="container-narrow">
          <h2 className="text-headline-sm mb-6">Where to find pricing details</h2>
          <p className="text-body-large text-muted-foreground mb-4">
            Final pricing is always displayed in the Elmo app before you unlock a scooter. 
            This ensures you know exactly what to expect for each ride.
          </p>
          <p className="text-body text-muted-foreground">
            Campus-specific rates and available passes will be visible once Elmo is active 
            at your university.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <p className="text-body-large text-muted-foreground">
            Launching soon. Pricing details will be available in the app once we're live on your campus.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
