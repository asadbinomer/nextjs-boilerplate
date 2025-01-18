"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // For animations

const PricingPlan = () => {
  const [isYearly, setIsYearly] = useState(true); // State to track if yearly is selected

  const togglePricing = () => {
    setIsYearly(!isYearly); // Toggle between yearly and monthly
  };

  return (
    <div
      id="pricing"
      className="py-[96px] pb-[200px] px-[10vw] bg-[#F5F8FF] flex flex-col items-center gap-[64px] relative overflow-hidden max-md:pb-[64px] max-md:py-[48px] max-sm:px-[20px] max-sm:gap-[24px]"
    >
      <div className="flex flex-col gap-4 max-w-[720px]">
        <h2 className="text-[#000215] text-[48px] text-center font-semibold">
          Explora nuestros precios
        </h2>
        <p className="text-[#4F4F4F] text-lg text-center">
          Hemos reducido al máximo los precios para que el docente pueda tener
          lo máximo en una sola plataforma con un precio increíblemente bueno.
          ¡Aprovecha esta oportunidad!
        </p>
      </div>

      {/* Toggle Button */}
      <div className="p-1 bg-white w-full max-w-[320px] rounded-[90px] border border-[#e7e7e7] items-center gap-1 flex">
        {/* Yearly Button */}
        <motion.div
          onClick={togglePricing}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`w-full transition-all px-2.5 py-4 rounded-[900px] justify-center text-lg items-center gap-2.5 flex cursor-pointer ${
            isYearly ? "bg-[#000215] text-white" : "bg-white text-[#4f4f4f]"
          }`}
        >
          Anual
        </motion.div>

        {/* Monthly Button */}
        <motion.div
          onClick={togglePricing}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`w-full transition-all px-2.5 py-4 rounded-[900px] justify-center text-lg items-center gap-2.5 flex cursor-pointer ${
            isYearly ? "bg-white text-[#4f4f4f]" : "bg-[#000215] text-white"
          }`}
        >
          Mensual
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="flex items-center justify-center gap-[32px] group plans__container max-md:flex max-md:flex-col max-[1360px]:grid grid-cols-2">
        <div className="pricing__card max-md:w-full translate-x-[72px] translate-y-16 rotate-[-8deg]">
          <CardContent
            title="Gratis"
            price="0€"
            textColor="#000215"
            secondryTextColor="#454545"
            features={starterFeatures}
          />
        </div>
        <div className="pricing__card max-md:w-full relative z-[1] !bg-[#0F1428]">
          <CardContent
            title="Básico"
            price={isYearly ? "6.99€ /mes" : "8.99€ /mes"} // Toggle between yearly and monthly
            textColor="#B0B0B0"
            secondryTextColor="#D1D1D1"
            features={standardFeatures}
          />
        </div>
        <div className="pricing__card max-md:w-full -translate-x-[72px] translate-y-16 rotate-[8deg] col-span-2">
          <CardContent
            title="Profesional"
            price={isYearly ? "11.99€ /mes" : "14.99€ /mes"} // Toggle between yearly and monthly
            textColor="#000215"
            secondryTextColor="#454545"
            features={professionalFeatures}
          />
        </div>
      </div>
    </div>
  );
};

const CardContent = ({
  title,
  price,
  textColor,
  features,
  secondryTextColor,
}) => (
  <>
    <div className="flex flex-col gap-[6px]">
      <span className={`text-[20px]`} style={{ color: textColor }}>
        {title}
      </span>
      <span
        className={`text-[42px] font-[700] font-['Roboto']`}
        style={{ color: secondryTextColor }}
      >
        {price}
      </span>
    </div>
    <div className="flex flex-col gap-6 items-start">
      <span className={`text-lg`} style={{ color: textColor }}>
        Incluye
      </span>
      <div className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <div className="flex items-start gap-2" key={index}>
            <CheckIcon />
            <span className="text-[#888]">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 25 25"
    className="min-w-[24px]"
    fill="none"
  >
    <path
      d="M22.6519 12.624C22.6519 7.10117 18.1747 2.62402 12.6519 2.62402C7.12901 2.62402 2.65186 7.10117 2.65186 12.624C2.65186 18.1468 7.12901 22.624 12.6519 22.624C18.1747 22.624 22.6519 18.1468 22.6519 12.624Z"
      stroke="#6D6D6D"
      strokeWidth="1.5"
    />
    <path
      d="M8.65186 13.124L11.1519 15.624L16.6519 9.62402"
      stroke="#6D6D6D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const starterFeatures = [
  "Puedes probarlo hasta 2.000 palabras.",
  "Acceso a la gran mayoría de herramientas",
  "Tutores Virtuales no están disponibles en este plan",
];

const standardFeatures = [
  "60.000 palabras por mes",
  "Acceso a todas las herramientas",
  "Acceso limitado a Tutores Virtuales",
  "10 mensajes por día para los asistentes del profesor",
];

const professionalFeatures = [
  "Palabras ilimitadas",
  "Acceso ilimitado a todas las herramientas",
  "Acceso ilimitado a todas los Tutores Virtuales",
  "40 mensajes por día para cada Asistente del Profesor",
  "Soporte prioritario",
];

export default PricingPlan;
