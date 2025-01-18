"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../components/shared/Button";
import { RouteConstant } from "../constants/RouteConstant.jsx";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section 
      className="overflow-hidden flex flex-col gap-8 items-center justify-center min-h-[80dvh] max-md:min-h-[80dvh] px-[36px] max-sm:px-5 py-6 relative" 
      id="hero"
      aria-label="Hero Section"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <BackgroundContent />
      <div className="flex relative flex-col gap-8 items-center justify-center scale-90">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile heading */}
          <h1 className="text-[#000215] sm:hidden text-center font-semibold text-[36px]">
            <span itemProp="headline">
              Innova tu enseñanza <br /> con Herramientas IA{" "}
            </span>
            <span className="relative">
              para docentes
              <motion.div
                className="absolute bottom-0 max-[875px]:-right-12 max-sm:w-[85px]"
                initial={{ rotate: -10 }}
                animate={{ rotate: 10 }}
                transition={{
                  duration: 1.5,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/heroSection/graduateCap.png"
                  alt="Graduation Cap Icon"
                  width={85}
                  height={85}
                  priority
                />
              </motion.div>
            </span>
          </h1>

          {/* Desktop heading */}
          <h1 
            className="text-[#000215] text-[64px] max-xl:text-[58px] max-lg:text-[52px] max-md:text-[48px] font-semibold max-w-[900px] text-center max-sm:hidden"
            itemProp="headline"
          >
            Innova tu
            <br className="max-sm:hidden" />
            enseñanza con Herramientas <br /> IA para docentes
          </h1>

          <motion.p
            className="max-w-[785px] text-center text-[#4f4f4f] text-lg max-md:text-[16px] font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            itemProp="description"
          >
            Creada por docentes, para docentes comprometidos con la innovación
          </motion.p>
        </motion.div>

        <Button aria-label="Comenzar ahora">
          Empieza ahora
        </Button>
      </div>

      <div className="flex items-center justify-center relative -mt-8 w-full">
        <div className="absolute right-[75%] bottom-[145%] max-[1078px]:hidden">
          <Image
            src="/images/heroSection/image1.png"
            alt="Herramienta de innovación educativa - Vista 1"
            width={320}
            height={240}
            quality={90}
            loading="eager"
            className="w-[320px]"
          />
        </div>

        <Image
          src="/images/heroSection/prueba5.png"
          alt="Plataforma principal de herramientas educativas"
          width={500}
          height={375}
          quality={95}
          priority
          className="w-[500px] rounded-xl max-sm:w-[360px]"
        />

        <div className="absolute left-[75%] bottom-[130%] max-[1078px]:hidden">
          <Image
            src="/images/heroSection/image3.png"
            alt="Herramienta de innovación educativa - Vista 2"
            width={320}
            height={240}
            quality={90}
            loading="eager"
            className="w-[320px] rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

const BackgroundContent = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="45"
        viewBox="0 0 56 45"
        fill="none"
        className="max-[1078px]:hidden absolute right-[25%] top-[10%]"
        aria-hidden="true"
        role="presentation"
      >
        <path
          d="M5.34933 38.5441L50.8623 1.48239"
          stroke="#0052CC"
          strokeWidth="2"
        />
        <path
          d="M10.8638 44.0073L42.3662 25.5723"
          stroke="#0052CC"
          strokeWidth="2"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="39"
        viewBox="0 0 40 39"
        fill="none"
        className="max-[1078px]:hidden absolute bottom-[30%] right-[30%]"
        aria-hidden="true"
        role="presentation"
      >
        <path
          d="M1.5 19.0542C0.119288 16.6628 0.938664 13.6048 3.33013 12.2241L21.9104 1.49682C24.2997 0.117326 27.3549 0.933917 28.7374 3.32155L38.5336 20.2404C39.902 22.6037 39.1211 25.6277 36.7797 27.0329L18.3604 38.0878C15.9643 39.526 12.8545 38.7209 11.4573 36.3007L1.5 19.0542Z"
          fill="#0059A6"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="59"
        height="67"
        viewBox="0 0 59 67"
        fill="none"
        className="max-[1078px]:hidden absolute left-[30%] bottom-[35%]"
        aria-hidden="true"
        role="presentation"
      >
        <path
          d="M2.42633 1.00642C-0.274045 12.0247 0.249028 35.0351 23.9443 38.9304M23.9443 38.9304C26.4396 39.1721 31.0645 38.2764 34.0186 33.8637C36.1838 30.6295 34.7767 25.2608 30.8892 25.4498C27.9561 25.5924 25.0019 28.7499 23.9443 38.9304ZM23.9443 38.9304C26.3085 48.4066 36.4294 66.9019 58.0001 65.073"
          stroke="#0059A6"
          strokeWidth="2"
        />
      </svg>
    </>
  );
};

// Add JSON-LD structured data
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPageElement",
  "name": "Hero Section",
  "headline": "Innova tu enseñanza con Herramientas IA para docentes",
  "description": "Creada por docentes, para docentes comprometidos con la innovación",
  "image": [
    "/images/heroSection/prueba5.png",
    "/images/heroSection/image1.png",
    "/images/heroSection/image3.png"
  ],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yourwebsite.com/#hero"
  }
};

export default HeroSection;