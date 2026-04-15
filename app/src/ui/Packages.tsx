import PackagesButton from "@/components/ui/PackagesButton";
import { Check } from "lucide-react";

const Packages = () => {
  /**
   * Professional service packages for multi-platform development.
   * Targeted for the Indonesian business market (Web, Android, Desktop).
   */
  const packages = [
    {
      name: "Digital Foundation",
      price: "3.500.000",
      description:
        "Solusi tepat untuk membangun kredibilitas instan. Hadirkan bisnis Anda di Google dan genggaman pelanggan dengan integrasi Web & Mobile.",
      features: [
        "Website Profil Bisnis Responsif",
        "Aplikasi Android (Play Store Ready)",
        "Dashboard Admin Kelola Konten Mudah",
        "Optimasi Google Search (SEO Lokal)",
        "Keamanan Data & SSL Sertifikat",
        "Konsultasi & Support 1 Bulan",
      ],
      popular: false,
    },
    {
      name: "Business Ecosystem",
      price: "12.500.000",
      description:
        "Kendali penuh bisnis dalam satu sistem. Sinkronisasi otomatis antara Web, Android, dan Aplikasi Komputer untuk operasional tanpa celah.",
      features: [
        "Sistem Web, Android, & Desktop (Windows/Mac)",
        "Sinkronisasi Data Real-Time Antar Perangkat",
        "Manajemen Inventori & Laporan Otomatis",
        "Sistem Notifikasi WhatsApp Business",
        "Analitik Performa Bisnis Harian",
        "Backup Data Otomatis & Aman",
        "Maintenance & Support Prioritas 3 Bulan",
      ],
      popular: true,
    },
    {
      name: "Enterprise Intelligence",
      price: "Hubungi Kami",
      description:
        "Transformasi digital total dengan teknologi AI. Automasi proses bisnis yang rumit menjadi sederhana dan efisien secara instan.",
      features: [
        "Custom Software Sesuai Alur Bisnis",
        "Integrasi AI & Scan Dokumen Otomatis (OCR)",
        "Automasi Penginputan Data Massal",
        "Keamanan Tingkat Tinggi (Enterprise Grade)",
        "Skalabilitas Server Tanpa Batas",
        "Dedicated Developer & Tim Support",
        "Optimasi Sistem Berkelanjutan",
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
                <div className="flex flex-col gap-2 text-3xl font-bold text-primary mb-3">
                  {Boolean(pkg.price !== "Hubungi Kami") ? (
                    <span>Mulai dari </span>
                  ) : (
                    ""
                  )}
                  {/* {pkg.promo && <span className="text-md">Rp {pkg.promo}</span>} */}
                  <span>
                    {pkg.price !== "Hubungi Kami" && "Rp "}
                    {pkg.price}
                  </span>
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
              {/* {pkg.promo && <p className="text-primary font-bold my-2">Promo Hingga Februari 2026!</p>} */}

              <PackagesButton />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
