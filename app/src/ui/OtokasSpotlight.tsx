"use client";

/**
 * OtokasSpotlight.tsx
 *
 * A high-converting "Product Spotlight" section promoting the Otokas app
 * for motorcycle dealers. Matches the site's light theme (bg-muted/30, bg-card,
 * shadow-soft/medium, gradient-primary) for visual consistency.
 *
 * Placement: Between <Packages /> and <Testimonials /> in page.tsx.
 *
 * @component OtokasSpotlight
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DownloadButton from "@/components/ui/DownloadButton";
import {
  Scan,
  BarChart3,
  ShieldCheck,
  Check,
  Zap,
  Star,
  ArrowRight,
  Gift,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

/** Fade-up entry — used for the section header and social proof strip */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  }),
};

/** Scale-in entry — used for feature and pricing cards */
const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  }),
};

// ---------------------------------------------------------------------------
// FeatureCard
// ---------------------------------------------------------------------------

/**
 * FeatureCard — A single feature highlight, styled like the About section cards.
 *
 * @param icon - Lucide icon node
 * @param title - Feature heading
 * @param description - Short description text
 * @param badge - Optional badge label (e.g. "AI-Powered")
 * @param delay - Framer Motion stagger delay in seconds
 */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  delay?: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  badge,
  delay = 0,
}: FeatureCardProps) => (
  <motion.div
    variants={scaleIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    custom={delay}
    whileHover={{ y: -5, transition: { duration: 0.22 } }}
    className="relative bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
  >
    {/* Optional badge */}
    {badge && (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-accent text-accent-foreground border border-border mb-4">
        <Zap size={10} className="text-primary" />
        {badge}
      </span>
    )}

    {/* Icon container — uses inline style because bg-* sets background-color,
        which cannot accept a gradient value. The background shorthand can. */}
    <div
      className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-primary-foreground"
      style={{ background: "var(--gradient-primary)" }}
    >
      {icon}
    </div>

    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

// ---------------------------------------------------------------------------
// OtokasSpotlight
// ---------------------------------------------------------------------------

/**
 * OtokasSpotlight — Product promotion section for Otokas.
 *
 * Uses the same visual language as the rest of the page:
 * bg-muted/30 section background, bg-card cards, shadow-soft/medium,
 * bg-gradient-primary icon containers, text-foreground and text-muted-foreground.
 */
const OtokasSpotlight = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  /** Feature checklist shown inside the pricing card */
  const pricingFeatures = [
    "Scan STNK & foto motor otomatis",
    "Laporan laba rugi real-time",
    "Manajemen stok tak terbatas",
    "Dashboard komisi sales",
    "Dukungan prioritas 24/7",
    "Update fitur seumur hidup",
  ];

  return (
    <section
      id="otokas-spotlight"
      ref={sectionRef}
      aria-labelledby="otokas-headline"
      className="py-20 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        {/* ---- Section Header ---- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Eyebrow label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="flex w-fit max-w-full flex-wrap mx-auto justify-center items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-border bg-accent text-primary mb-6"
          >
            <Star size={12} className="fill-primary text-primary" />
            Produk Unggulan Civika Digital
          </motion.div>

          {/* Main headline */}
          <motion.h2
            id="otokas-headline"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Kelola Dealer Motor{" "}
            <span className="bg-gradient-accent multi-color bg-clip-text text-transparent">
              10x Lebih Cepat
            </span>{" "}
            dengan AI
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            className="text-lg text-muted-foreground"
          >
            <strong className="text-foreground font-semibold">Otokas</strong> —
            aplikasi manajemen dealer motor berbasis AI yang mengubah cara Anda
            mengelola stok, laporan, dan komisi sales.
          </motion.p>
        </div>

        {/* ---- Feature Grid (2 columns) ---- */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          <FeatureCard
            delay={0.05}
            badge="AI-Powered"
            icon={<Scan size={24} />}
            title="Input Motor Otomatis via AI Scan"
            description="Cukup ambil foto motor atau STNK — Otokas secara otomatis membaca dan menginput seluruh data kendaraan ke sistem dalam hitungan detik. Tidak perlu ketik manual lagi."
          />
          <FeatureCard
            delay={0.12}
            badge="Real-time"
            icon={<BarChart3 size={24} />}
            title="Laporan Penjualan Real-time"
            description="Pantau laporan laba rugi, performance sales, dan komisi secara instan kapan saja. Data selalu akurat dan ter-update otomatis setiap transaksi terjadi."
          />
          <FeatureCard
            delay={0.19}
            icon={<ShieldCheck size={24} />}
            title="Data Aman & Terpercaya"
            description="Seluruh data dealer Anda dienkripsi dan disimpan di cloud yang aman. Backup otomatis harian memastikan tidak ada data yang pernah hilang."
          />
          <FeatureCard
            delay={0.26}
            icon={<Zap size={24} />}
            title="Setup Cepat, Langsung Jalan"
            description="Daftar, login, dan mulai input motor pertama Anda dalam 5 menit. Tidak perlu training teknis — antarmuka dirancang untuk pengguna non-teknis."
          />
        </div>

        {/* ---- Pricing Card ---- */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.1}
          className="max-w-md mx-auto mt-8"
        >
          <div className="relative bg-card rounded-xl p-8 shadow-medium border-2 border-primary">
            {/* "Most Popular" badge — matches Packages section style */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-max max-w-[calc(100%-2rem)] text-center px-5 py-1.5 bg-gradient-primary text-secondary-foreground text-sm font-semibold rounded-full shadow-soft">
              ⭐ Most Popular
            </div>

            {/* Tier label */}
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4 mt-2">
              Premium
            </p>

            {/* Price */}
            <div className="mb-1">
              <span className="text-4xl font-bold text-primary">
                Rp 200.000
              </span>
              <span className="text-muted-foreground text-sm ml-2">/bulan</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              Akses penuh semua fitur premium tanpa batasan.
            </p>

            {/* Feature checklist */}
            <ul className="space-y-3 mb-8">
              {pricingFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-accent-green" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Primary CTA button */}
            <motion.a
              href="#contact"
              id="otokas-trial-cta"
              aria-label="Mulai trial gratis 30 hari Otokas Premium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-bold text-primary-foreground text-base transition-shadow duration-300"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "var(--shadow-medium)",
              }}
            >
              <DownloadButton />
              <ArrowRight size={18} />
            </motion.a>

            {/* Micro-copy — free tier hook */}
            <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground mt-4">
              <Gift size={13} className="text-accent-green" />
              Tersedia versi gratis selamanya · Tanpa kartu kredit
            </p>
          </div>
        </motion.div>

        {/* ---- Social proof strip ---- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="flex flex-wrap items-center justify-center gap-6 mt-14 text-muted-foreground text-xs"
        >
          {[
            { icon: <ShieldCheck size={14} />, text: "Data 100% Aman" },
            { icon: <Zap size={14} />, text: "Setup < 5 Menit" },
            { icon: <Star size={14} />, text: "30 Hari Trial Gratis" },
            { icon: <Check size={14} />, text: "Tanpa Kontrak Jangka Panjang" },
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <span className="text-primary">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OtokasSpotlight;
