import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Zap, Ticket } from "lucide-react";

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            title="Pricing"
            description="Simple, transparent access to campus mobility. Choose what works for you."
            centered
          />
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding-sm bg-primary/10">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Pay As You Go Card */}
            <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-title mb-3">Pay As You Go</h3>
              <p className="text-body text-muted-foreground">
                Pay per ride with a small unlock fee plus a per-minute rate. 
                Perfect for occasional trips across campus.
              </p>
            </div>

            {/* RidePasses Card */}
            <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Ticket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-title mb-3">RidePasses</h3>
              <p className="text-body text-muted-foreground">
                Get unlimited unlocks and discounted rates with a weekly or monthly pass. 
                Ideal for daily commuters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Find Pricing */}
      <section className="section-padding-sm bg-background">
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
      <section className="section-padding bg-muted/30">
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
