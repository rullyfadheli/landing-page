import Image from "next/image";
import HeroButton from "@/components/ui/HeroButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-accent/30 via-background to-background" />
        {/* <Image
          src="/hero-bg.png"
          width={500}
          height={500}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        /> */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Mewujudkan Impian{" "}
            <span className="bg-gradient-accent multi-color bg-clip-text text-transparent">
              Digital
            </span>{" "}
            Bisnis Anda
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Solusi website profesional yang dirancang khusus untuk pertumbuhan
            bisnis Anda
          </p>

          <HeroButton />

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: "50+", label: "Proyek Selesai" },
              { value: "98%", label: "Kepuasan Klien" },
              { value: "24/7", label: "Dukungan" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
