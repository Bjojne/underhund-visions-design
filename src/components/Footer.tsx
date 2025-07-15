
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/cac757d5-8736-40f4-8f1d-961463744f9c.png" 
                alt="Underhund Media" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Kreativa lösningar för moderna företag
            </p>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              © 2024 Underhund Media. Alla rättigheter förbehållna.
            </p>
          </div>

          <div className="text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300"
            >
              <span>Tillbaka upp</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
