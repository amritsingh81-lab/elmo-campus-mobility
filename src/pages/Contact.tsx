import { useState } from "react";
import { Mail, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", organization: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-narrow text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block animate-fade-in">
            Contact
          </span>
          <h1 className="text-display mb-6 animate-slide-up">
            Get in touch
          </h1>
          <p className="text-body-large max-w-xl mx-auto animate-slide-up delay-100">
            Have a question about Elmo? Interested in bringing shared scooters to your campus? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="text-title mb-4">Let's talk</h2>
              <p className="text-body text-muted-foreground mb-8">
                Whether you're a university administrator exploring a pilot program, 
                or you simply have questions about Elmo, fill out the form and 
                our team will get back to you.
              </p>
              
              <div className="card-elevated">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="text-primary" size={20} />
                  <span className="font-medium">General inquiries</span>
                </div>
                <p className="text-muted-foreground">hello@elmomobility.in</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="label-text">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-text">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="label-text">
                    Organization (optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="University or company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeader
            title="Common questions"
            centered
          />
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="card-elevated">
              <h3 className="text-subtitle mb-2">Is Elmo available at my campus?</h3>
              <p className="text-body text-muted-foreground">
                Elmo is currently in the pilot phase and launching on select university 
                campuses. If you'd like to see Elmo at your campus, let us know through 
                the contact form.
              </p>
            </div>
            <div className="card-elevated">
              <h3 className="text-subtitle mb-2">How does the pilot program work?</h3>
              <p className="text-body text-muted-foreground">
                We partner with university administration to design a controlled rollout. 
                This includes defining operating zones, parking areas, and usage guidelines 
                tailored to each campus.
              </p>
            </div>
            <div className="card-elevated">
              <h3 className="text-subtitle mb-2">Who manages the scooters?</h3>
              <p className="text-body text-muted-foreground">
                Elmo handles all operations including deployment, maintenance, charging, 
                and user support. Universities don't need to manage any day-to-day operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
