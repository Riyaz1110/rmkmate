import { motion } from "framer-motion";
import { Calendar, MapPin, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";

import heroImage from "@/assets/homepo.png";
import poster from "@/assets/backgroundpo.png";
import leftLogo from "@/assets/logo.png";     // <-- Add your left logo
import rightLogo1 from "@/assets/3oyrs.png";
import rightLogo2 from "@/assets/IEEE.png";   // <-- Add your right logo
import brochurePage1 from "@/assets/brochuer1.png";
import brochurePage2 from "@/assets/brochuer2.png";
import brochurePDF from "@/assets/RMKMATE 2026.pdf";
export default function Home() {

  return (
    <div className="min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={poster}
            alt="Conference Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full text-center px-6">

          {/* Top Logos + Center Text */}
          {/* Top Logos + Center Text */}
          <div className="relative w-full mb-10 h-20 mt-20 md:mt-24">

          {/* LEFT LOGO */}
          <img
            src={leftLogo}
            alt="Left Logo"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-16 md:w-24 object-contain"
          />

          {/* RIGHT LOGOS (2 Logos Stacked) */}
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <img
              src={rightLogo1}
              alt="30 Years Logo"
              className="w-14 md:w-20 object-contain"
            />
            {/* <img
              src={rightLogo2}
              alt="IEEE Logo"
              className="w-14 md:w-20 object-contain"
            /> */}
          </div>

          {/* CENTER TEXT */}
                        {/* CENTER TEXT */}
              <div className="flex flex-col items-center justify-center text-center">

                <h2 className="text-2xl md:text-5xl font-extrabold text-white tracking-wider drop-shadow-[0_6px_15px_rgba(0,0,0,0.9)] bg-black/40 px-6 py-2 rounded-lg">
                  R.M.K ENGINEERING COLLEGE
                </h2>

                {/* Autonomous Text */}
                <p className="mt-3 text-lg md:text-2xl font-bold text-yellow-400 tracking-wide">
                  (An Autonomous Institution)
                </p>

                {/* Address */}
                {/* <p className="mt-3 text-sm md:text-lg font-bold text-gray-200 max-w-4xl leading-relaxed px-4">
                  R.S.M. NAGAR, KAVARAIPETTAI, GUMMIDIPOONDI TALUK, THIRUVALLUR DIST – 601 206
                </p> */}

                {/* Accreditation Details */}
                <p className="mt-3 text-xs md:text-base font-bold text-white max-w-5xl leading-relaxed px-4">
                  R.S.M. NAGAR, KAVARAIPETTAI, GUMMIDIPOONDI TALUK, THIRUVALLUR DIST – 601 206<br/>
                  Affiliated to Anna University, Chennai / APPROVED BY AICTE, New Delhi /
                  Accredited by NAAC with A+ Grade / ISO 9001:2015 Certified Institution /
                  All the eligible UG programs are accredited by NBA, New Delhi.
                </p>

              </div>

        </div>

          {/* Registration Badge
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Registrations Open for 2026
            </div>
          </div> */}
          <br/>
          <br/>
          <br/>
          <br/>
          {/* Conference Title with Logo */}
            <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              RMKMATE'<span className="text-primary ml-1">26</span>
            </h1>

            <img
              src={rightLogo2}
              alt="Conference Logo"
              className="h-8 md:h-12 w-auto"
            />
          </div>

          <p className="text-2xl md:text-3xl text-slate-200 font-light max-w-4xl mx-auto leading-relaxed">
            International Conference on <br />
            <span className="font-semibold text-blue-400">
              Research Methodologies in Knowledge Management,
              Artificial Intelligence & Telecommunication Engineering
            </span>
          </p>

          {/* Date & Location */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-white font-semibold text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="text-primary" />
              15–16 April 2026
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" />
              R.M.K. Engineering College, Chennai
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
            <Link href="/paper-submission">
              <Button
                size="lg"
                className="rounded-full px-10 h-14 text-lg shadow-lg"
              >
                Submit Paper
              </Button>
            </Link>

            <Link href="/schedule">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 h-14 text-lg bg-transparent border-white text-white hover:bg-white/10"
              >
                View Schedule
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 rotate-3" />
              <img
                src={heroImage}
                alt="Conference Banner"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <SectionHeader
                title="About The Conference"
                subtitle="RMKMATE'26"
                align="left"
                className="mb-6"
              />

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RMKMATE is an international academic conference focused on advancing research and innovation in Artificial Intelligence (AI), Knowledge Management, Intelligent Systems, and Telecommunication Engineering.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                It serves as a platform for researchers, academicians, industry professionals, and students to present novel, unpublished research contributions addressing modern technological challenges and real-world applications.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: FileText,
                    title: "Paper Publication",
                    desc: "Selected papers will be recommended for publication in the IEEE Digital Library and will be indexed in Scopus."
                  },
                  {
                    icon: Award,
                    title: "Best Paper Awards",
                    desc: "Recognition for outstanding research contributions"
                  }
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-xl border hover:border-primary/30 hover:bg-primary/5 transition-colors"
                  >
                    <feature.icon className="w-10 h-10 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= BROCHURE SECTION ================= */}
      <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">

            <SectionHeader
              title="Conference Brochure"
              subtitle="RMKMATE'26"
              className="mb-16"
            />

            {/* Images One Below Another */}
            <div className="flex flex-col items-center gap-12">

              {/* Brochure Page 1 */}
              <div className="relative group w-full md:w-[800px]">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 rotate-1" />
                <img
                  src={brochurePage1}
                  alt="Brochure Page 1"
                  className="rounded-2xl shadow-2xl w-full object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Brochure Page 2 */}
              <div className="relative group w-full md:w-[800px]">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 -rotate-1" />
                <img
                  src={brochurePage2}
                  alt="Brochure Page 2"
                  className="rounded-2xl shadow-2xl w-full object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Download Button */}
              <a href={brochurePDF} download>
                <Button
                  size="lg"
                  className="mt-6 rounded-full px-12 h-14 text-lg shadow-lg"
                >
                  Download Brochure
                </Button>
              </a>

            </div>

          </div>
        </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to Participate?
          </h2>

          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join us at RMKMATE'26 for two days of inspiring talks, networking, and knowledge sharing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="font-bold h-14 px-8 text-lg"
              >
                Register Now
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg"
              >
                Contact Organizers
              </Button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}