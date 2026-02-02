import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Mail } from "lucide-react";
import pressIllustration from "@/assets/press-illustration.jpg";

const Press = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            title="Press"
            description="Updates, announcements, and information for media."
            centered
          />
        </div>
      </section>

      {/* Illustration divider */}
      <section className="container-wide py-12">
        <div className="illustration-container max-w-4xl mx-auto">
          <img
            src={pressIllustration}
            alt="Press and communication"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding-sm bg-muted/30">
        <div className="container-narrow">
          <p className="text-body-large text-muted-foreground mb-4">
            This is where Elmo shares news, updates, and announcements. We're building a 
            shared electric scooter service designed specifically for university campuses in India.
          </p>
          <p className="text-body text-muted-foreground">
            Our focus is on creating simple, sustainable mobility solutions that work within 
            closed campus environments—making it easier for students and staff to move around safely.
          </p>
        </div>
      </section>

      {/* Press Materials */}
      <section className="section-padding-sm bg-background">
        <div className="container-narrow">
          <h2 className="text-headline-sm mb-6">Press materials</h2>
          <p className="text-body text-muted-foreground">
            Press releases, media assets, and related materials will be published here closer 
            to launch. This page will be updated as we have more to share.
          </p>
        </div>
      </section>

      {/* Press Enquiries */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <h2 className="text-headline-sm mb-6">Press enquiries</h2>
          <p className="text-body text-muted-foreground mb-6">
            For media-related questions or interview requests, please reach out to us directly.
          </p>
          <div className="flex items-center gap-3 text-foreground">
            <Mail size={20} className="text-primary" />
            <span className="text-body">press@elmomobility.in</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Press;
