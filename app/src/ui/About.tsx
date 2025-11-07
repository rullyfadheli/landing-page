import { Code2, Rocket, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Teknologi Modern",
      description:
        "Menggunakan teknologi terkini untuk memastikan website Anda cepat, aman, dan scalable",
    },
    {
      icon: Rocket,
      title: "Pengembangan Cepat",
      description:
        "Proses pengembangan yang efisien tanpa mengorbankan kualitas dan fungsionalitas",
    },
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description:
        "Prioritas pada keamanan data dan privasi dengan standar industri terbaik",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h2>
          <p className="text-lg text-muted-foreground">
            Civika Digital Technology adalah partner terpercaya Anda dalam
            transformasi digital. Kami berkomitmen untuk memberikan solusi
            website profesional yang membantu bisnis Anda tumbuh dan berkembang
            di era digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-6">
                  <Icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
