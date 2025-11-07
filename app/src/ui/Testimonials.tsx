import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      company: "PT Maju Jaya",
      text: "Civika Digital Technology berhasil mengembangkan website perusahaan kami dengan sempurna. Profesional, responsif, dan hasil yang melampaui ekspektasi!",
      rating: 5,
    },
    {
      name: "Siti Rahma",
      company: "Toko Online Fashion",
      text: "Website e-commerce yang dibuat sangat user-friendly dan membantu meningkatkan penjualan kami hingga 200%. Highly recommended!",
      rating: 5,
    },
    {
      name: "Ahmad Fauzi",
      company: "Restoran Nusantara",
      text: "Tim yang sangat membantu dan komunikatif. Mereka memahami kebutuhan bisnis kami dan memberikan solusi terbaik. Terima kasih!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Kata Mereka</h2>
          <p className="text-lg text-muted-foreground">
            Kepercayaan klien adalah prioritas utama kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent-orange text-accent-orange"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
