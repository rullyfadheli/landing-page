import { Button } from "@/components/ui/button";
import PackagesButton from "@/components/ui/PackagesButton";
import { Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Basic",
      price: "Mulai dari Rp 1.000.000",
      description:
        "Solusi ideal untuk bisnis yang baru memulai kehadiran online",
      features: [
        "Desain responsif modern",
        // "Hingga 5 halaman",
        "SEO dasar",
        "Form kontak",
        "Integrasi Google Maps",
        "SSL Certificate",
        "1 bulan support gratis",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "Mulai dari Rp 5.000.000",
      description: "Paket lengkap untuk bisnis yang ingin tumbuh lebih cepat",
      features: [
        "Semua fitur Basic",
        "Hingga 8 halaman",
        "SEO advanced",
        "Blog/News system",
        "Integrasi WhatsApp Business",
        "Admin panel",
        "Analytics dashboard",
        "3 bulan support gratis",
      ],
      popular: true,
    },
    {
      name: "E-commerce",
      price: "Hubungi Kami",
      description: "Solusi komprehensif untuk toko online Anda",
      features: [
        "Semua fitur Business",
        "Katalog produk unlimited",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Inventory management",
        "Order tracking",
        "Customer dashboard",
        "6 bulan support gratis",
      ],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Paket Layanan</h2>
          <p className="text-lg text-muted-foreground">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                pkg.popular ? "border-2 border-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-primary text-sm font-semibold rounded-full">
                  Paling Populer
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary mb-3">
                  {pkg.price}
                </div>
                <p className="text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-accent-green" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <PackagesButton />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
