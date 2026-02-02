import { Link } from "react-router-dom";
import logoElmo from "@/assets/logo-elmo.png";

const footerLinks = {
  explore: [
    { name: "Students", path: "/students" },
    { name: "Universities", path: "/universities" },
    { name: "How it works", path: "/how-it-works" },
  ],
  company: [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logoElmo}
                alt="Elmo"
                className="h-12 w-auto rounded-lg"
              />
            </Link>
            <p className="text-body text-muted-foreground max-w-sm">
              Shared electric scooters designed for university campuses in India. 
              Simple, sustainable, campus-only mobility.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-small">
            © {new Date().getFullYear()} Elmo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-small hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-small hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
