// app/page.js
"use client";

import Navbar from "@/views/components/navbar/Navbar";
import HeroSection from "@/views/home/HeroSection";
import Tools from "@/views/home/Tools";
import FeatureSection from "@/views/home/FeatureSection";
import Academy from "@/views/home/Academy";
import PricingPlan from "@/views/home/PricingPlan";
import Faqs from "@/views/home/Faqs";
import Testimonials from "@/views/home/Testimonial";
import Footer from "@/views/components/footer/Footer";
import Script from "next/script";

export default function Home() {
  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Your Company Name",
    description: "Professional Tools and Academy Platform",
    url: "https://yourwebsite.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourwebsite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main itemScope itemType="https://schema.org/WebPage">
        <Navbar />
        
        <article>
          <HeroSection />
          <Tools />
          <FeatureSection />
          <Academy />
          <PricingPlan />
          <Faqs />
          <Testimonials />
        </article>

        <Footer />
      </main>
    </>
  );
}