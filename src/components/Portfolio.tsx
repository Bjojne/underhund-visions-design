
import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Alla');

  const portfolioItems = [
    {
      id: 1,
      title: 'Varumärkesidentitet - TechStart',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      description: 'Komplett varumärkesidentitet för tech-startup'
    },
    {
      id: 2,
      title: 'Produktfilm - Nordic Fashion',
      category: 'Video',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
      description: 'Elegant produktfilm för modevarumärke',
      isVideo: true
    },
    {
      id: 3,
      title: 'Företagsfotografering - Apex Corp',
      category: 'Foto',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop',
      description: 'Professionell företagsfotografering'
    },
    {
      id: 4,
      title: 'Webbdesign - Creative Agency',
      category: 'Webb',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      description: 'Modern responsiv webbplats'
    },
    {
      id: 5,
      title: 'Marknadsföringskampanj - Urban Eats',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop',
      description: 'Helhetslösning för restaurangkedja'
    },
    {
      id: 6,
      title: 'Eventvideo - Music Festival',
      category: 'Video',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      description: 'Dynamisk eventvideo från musikfestival',
      isVideo: true
    }
  ];

  const categories = ['Alla', 'Design', 'Video', 'Foto', 'Webb'];

  const filteredItems = activeFilter === 'Alla' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Vårt <span className="text-primary">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Utforska några av våra senaste projekt och se hur vi hjälper företag att sticka ut
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    {item.isVideo ? (
                      <Play className="w-12 h-12 text-white mb-4 mx-auto" />
                    ) : (
                      <ExternalLink className="w-12 h-12 text-white mb-4 mx-auto" />
                    )}
                    <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
                      {item.isVideo ? 'Spela upp' : 'Se projekt'}
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
