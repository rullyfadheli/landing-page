"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formData;

    try {
      console.log("Sending form data:", { name, email, subject, message });

      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      console.log("Response status:", response.status);

      // Cek apakah response OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.success);

      if (data.success) {
        toast.success(
          "Pesan Anda telah terkirim! Kami akan menghubungi Anda segera."
        );
        // Reset form setelah berhasil
        // setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.message || "Pesan Anda gagal terkirim!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan layanan Civika Digital Technology"
    );
    window.open(`https://wa.me/6281953541195?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h2>
          <p className="text-lg text-muted-foreground">
            Mari wujudkan impian digital bisnis Anda bersama kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="space-y-6"
            >
              <div>
                <Input
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Input
                  placeholder="Subjek"
                  value={formData.subject}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                // size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className="space-y-8 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                  <MessageSquare
                    className="text-primary-foreground"
                    size={24}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">WhatsApp Business</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Hubungi kami langsung untuk konsultasi gratis
                  </p>
                  <Button onClick={handleWhatsApp} variant="outline" size="sm">
                    Chat WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-green/20 flex items-center justify-center shrink-0">
                  <Mail className="text-accent-green" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    info@civikadigital.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-orange/20 flex items-center justify-center shrink-0">
                  <MapPin className="text-accent-orange" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lokasi</h3>
                  <p className="text-muted-foreground text-sm">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
