import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import investorIllustration from "@/assets/investor-illustration.jpg";

const InvestorRelations = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            title="Investor Relations"
            description="Corporate and investor-related information."
            centered
          />
        </div>
      </section>

      {/* Illustration divider */}
      <section className="container-wide py-12">
        <div className="illustration-container max-w-4xl mx-auto">
          <img
            src={investorIllustration}
            alt="Corporate overview"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding-sm bg-muted/30">
        <div className="container-narrow">
          <h2 className="text-headline-sm mb-6">Overview</h2>
          <p className="text-body-large text-muted-foreground mb-4">
            This page is dedicated to corporate and investor-related information. It serves 
            as a central point for relevant updates and disclosures when appropriate.
          </p>
          <p className="text-body text-muted-foreground">
            Elmo operates shared electric scooters exclusively within university campuses in 
            India, focusing on closed, private environments rather than public streets.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding-sm bg-background">
        <div className="container-narrow">
          <h2 className="text-headline-sm mb-6">Our approach</h2>
          <p className="text-body text-muted-foreground mb-4">
            We take a campus-first approach to shared mobility. This means working directly 
            with universities to integrate our service into existing campus infrastructure 
            and daily routines.
          </p>
          <p className="text-body text-muted-foreground">
            Our focus is on building sustainable operations that serve campus communities well 
            over the long term.
          </p>
        </div>
      </section>

      {/* Updates */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <h2 className="text-headline-sm mb-6">Updates</h2>
          <p className="text-body text-muted-foreground">
            Further details and relevant information will be shared here when available.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorRelations;
