import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Civika Digital Technology
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Partner terpercaya Anda dalam transformasi digital. Mewujudkan
              impian bisnis melalui solusi website profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Packages", "Testimonials", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent hover:bg-accent-orange/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-accent-orange" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-primary" />
              </a>
              <a
                href="mailto:info@civikadigital.com"
                className="w-10 h-10 rounded-lg bg-accent hover:bg-accent-green/20 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} className="text-accent-green" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Civika Digital Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
