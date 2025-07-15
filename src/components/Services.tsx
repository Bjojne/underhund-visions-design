
import { Palette, Camera, Video, Edit, Globe, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Grafisk Formgivning',
      description: 'Logotyper, varumärkesidentitet, trycksaker och digital design som sticker ut från mängden.',
      features: ['Logotypdesign', 'Varumärkesidentitet', 'Trycksaker', 'Digital design']
    },
    {
      icon: Camera,
      title: 'Fotografering',
      description: 'Professionell produkt-, porträtt- och eventfotografering som fångar rätt känsla.',
      features: ['Produktfoto', 'Porträttfoto', 'Eventfoto', 'Kommersiell foto']
    },
    {
      icon: Video,
      title: 'Filmning',
      description: 'Kreativ videoproduktion från koncept till färdig film för alla plattformar.',
      features: ['Företagsfilm', 'Produktvideo', 'Sociala medier', 'Eventdokumentation']
    },
    {
      icon: Edit,
      title: 'Videoredigering',
      description: 'Professionell post-produktion som förvandlar råfilm till engagerande berättelser.',
      features: ['Klippning', 'Färgkorrigering', 'Ljuddesign', 'Motion graphics']
    },
    {
      icon: Globe,
      title: 'Webbdesign',
      description: 'Moderna, responsiva webbplatser som konverterar besökare till kunder.',
      features: ['UX/UI Design', 'Responsiv design', 'E-handel', 'SEO-optimering']
    }
  ];

  return (
    <section id="tjänster" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Våra <span className="text-primary">Tjänster</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi erbjuder ett komplett utbud av kreativa tjänster för att ta ditt varumärke till nästa nivå
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-card p-8 rounded-xl hover:bg-card/80 transition-all duration-300 hover:scale-105 border border-border hover:border-primary/50">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="text-primary font-semibold flex items-center hover:text-primary/80 transition-colors duration-300">
                Läs mer <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
