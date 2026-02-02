import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const JoinUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            title="Join us"
            description="Building campus mobility, one university at a time."
            centered
          />
        </div>
      </section>

      {/* About Working at Elmo */}
      <section className="section-padding-sm bg-muted/30">
        <div className="container-narrow">
          <h2 className="text-headline-sm mb-6">What we do</h2>
          <p className="text-body-large text-muted-foreground mb-4">
            Elmo builds and operates shared electric scooter services for university campuses. 
            Our work spans operations, technology, partnerships, and community engagement—all 
            focused on making campus mobility simpler and more sustainable.
          </p>
          <p className="text-body text-muted-foreground">
            We work closely with universities to understand their environments and design 
            services that fit naturally into campus life.
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="section-padding-sm bg-background">
        <div className="container-narrow">
          <h2 className="text-headline-sm mb-6">Opportunities</h2>
          <p className="text-body text-muted-foreground mb-4">
            We don't have open roles listed at the moment. As we grow, opportunities may 
            become available across different areas of our work.
          </p>
          <p className="text-body text-muted-foreground">
            If you're interested in campus mobility or sustainable transportation, feel free 
            to check back here from time to time.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow text-center">
          <p className="text-body-large text-muted-foreground">
            Opportunities will be shared closer to launch.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default JoinUs;
