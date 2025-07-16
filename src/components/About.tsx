
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', text: 'Nöjda kunder' },
    { icon: Award, number: '100+', text: 'Projekt genomförda' },
    { icon: Clock, number: '5+', text: 'År av erfarenhet' },
    { icon: Heart, number: '∞', text: 'Passion för kreativitet' }
  ];

  return (
    <section id="om-oss" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Om <span className="text-primary">Underhund Media</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vi är en kreativ byrå som brinner för att hjälpa företag att berätta sina historier 
            genom kraftfull visuell kommunikation och innovativ design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-6">Vår vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Att vara den kreativa partnern som tar ditt varumärke till nästa nivå. 
              Vi tror på kraften i visuell storytelling och hur rätt design kan 
              transformera företag och skapa känslomässiga kopplingar med kunder.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Med passion för innovation och en djup förståelse för moderna designtrender, 
              skapar vi lösningar som inte bara ser bra ut - de levererar resultat.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-background p-6 rounded-xl hover:bg-muted/20 transition-all duration-300 hover:scale-105">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
