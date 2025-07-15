
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
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">U</span>
              </div>
              <span className="font-serif text-2xl font-bold">Underhund Media</span>
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
