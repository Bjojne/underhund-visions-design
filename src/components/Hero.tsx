
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-parallax"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary rounded-full animate-parallax delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary rounded-full animate-parallax delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in-up">
          {/* Main Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-3xl">U</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold">
                Underhund <span className="text-primary">Media</span>
              </h1>
            </div>
          </div>

          {/* Hero Text */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Vi skapar visuella berättelser som fångar uppmärksamhet och 
            <span className="text-primary font-semibold"> driver resultat</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Från grafisk formgivning till videoproduktion - vi hjälper företag att sticka ut med kreativitet och kvalitet
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Se vårt arbete
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Kontakta oss
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('om-oss')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
