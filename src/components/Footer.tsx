import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import logoElmo from "@/assets/logo-elmo.png";

const footerLinks = {
  explore: [
    { name: "How it Works", path: "/how-it-works" },
    { name: "Students", path: "/students" },
    { name: "Universities", path: "/universities" },
    { name: "Pricing", path: "/pricing" },
  ],
  company: [
    { name: "About us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Press", path: "/press" },
    { name: "Join us", path: "/join-us" },
    { name: "Investor Relations", path: "/investor-relations" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  { name: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
  { name: "YouTube", href: "https://youtube.com", icon: Youtube },
];

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

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={social.name}
              >
                {social.icon === "tiktok" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                ) : (
                  <social.icon className="w-5 h-5" />
                )}
              </a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
