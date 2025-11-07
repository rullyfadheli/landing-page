"use client";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
export default function HeroButton() {
  const scrollToPackages = () => {
    const element = document.querySelector("#packages");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center gap-2">
      <Button
        size="lg"
        //   variant="hero"
        onClick={scrollToPackages}
        className="group packet-button"
      >
        Lihat Paket Kami
        <ArrowRight
          className="ml-2 group-hover:translate-x-1 transition-transform"
          size={20}
        />
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={() => {
          const element = document.querySelector("#contact");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        className="consultation"
      >
        Konsultasi Gratis
      </Button>
    </div>
  );
}
