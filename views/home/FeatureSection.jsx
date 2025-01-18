"use client";

import React from "react";

const FeatureSection = () => {
  return (
    <div className="py-[96px] px-[6vw] bg-[#F5F8FF] flex flex-col items-center gap-[64px] max-sm:py-[48px] max-sm:gap-5 max-md:py-[64px] relative" id="features">
      <img
        src="/images/featureSection/hand.png"
        alt=""
        className="absolute right-0 top-0 max-[1500px]:top-auto max-[1500px]:right-auto max-[1500px]:left-0 max-[1500px]:bottom-0 max-[1500px]:rotate-180"
      />
      <div className="flex flex-col gap-4 max-w-[720px]">
        <h2 className="text-[#000215] text-[48px] text-center font-semibold max-md:text-[42px] max-sm:text-[32px]">
          Lo más destacado
        </h2>
        <p className="text-[#4F4F4F] text-lg text-center max-md:text-[16px] max-md:text-sm">
          Podrás crear chatbots autonónomos completamente personalizados
          para que tus alumnos aprendan en casa o en el mismo centro. 
        </p>
      </div>

      <div className="grid grid-cols-4 w-full gap-8 max-[1350px]:grid-cols-3 max-[1060px]:grid-cols-2 max-sm:grid-cols-1 relative z-[1]">
        <div className="flex flex-col gap-8 bg-opacity-90 items-center px-6 py-12 rounded-3xl bg-white transition-all hover:bg-[#E5E9FF] max-sm:rounded-2xl max-sm:py-8 max-sm:px-4 w-full">
          <img src="/images/featureSection/reading.png" alt="" />
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-[24px] font-medium text-center text-[#454545] max-md:text-[20px] max-sm:text-lg">
              Experiencia de elaboración docente 100% PERSONALIZADA
            </h2>
            <p className="text-[#4F4F4F] text-lg text-center max-md:text-[16px] max-sm:text-sm">
              Podrás elaborar Unidades Didácticas, sesiones, y mucho más incluso atendiendo a la diversidad
              de cada alumno en tus sesiones. Usa la Taxonomía de Bloom o el sistema NEAE para personalizar
              aún más tus sesiones.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 bg-opacity-90 items-center px-6 py-12 rounded-3xl bg-white transition-all hover:bg-[#FFF7D9] max-sm:rounded-2xl max-sm:py-8 max-sm:px-4 w-full">
          <img src="/images/featureSection/magic.png" alt="" />
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-[24px] font-medium text-center text-[#454545] max-md:text-[20px] max-sm:text-lg">
              Herramientas adaptadas al currículo español de cada Comunidad Autónoma.
            </h2>
            <p className="text-[#4F4F4F] text-lg text-center max-md:text-[16px] max-sm:text-sm">
              En cada herramienta, podrás generar tu contenido adaptado a los criterios de evaluación, saberes básicos y competencias 
              de tu Comunidad Autónoma. Tendrás personalización completa de todo tu contenido.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 bg-opacity-90 items-center px-6 py-12 rounded-3xl bg-white transition-all hover:bg-[#D8F6EE] max-sm:rounded-2xl max-sm:py-8 max-sm:px-4 w-full">
          <img src="/images/featureSection/robot.png" alt="" />
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-[24px] font-medium text-center text-[#454545] max-md:text-[20px] max-sm:text-lg">
              24/7 Chatbot para resolver todas tus dudas
            </h2>
            <p className="text-[#4F4F4F] text-lg text-center max-md:text-[16px] max-sm:text-sm">
              Con nuestro asistente personal, podrás resolver tus dudas en cualquier momento,
              en línea y activo 24 horas. Si tuvieras preguntas más importantes que hacer,
              siempre podrás contactar con nosotros en: info@tututor.ai
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 bg-opacity-90 items-center px-6 py-12 rounded-3xl bg-white transition-all hover:bg-[#D3F0FF] max-sm:rounded-2xl max-sm:py-8 max-sm:px-4 w-full max-[1350px]:col-span-3 max-[1060px]:col-span-1">
          <img src="/images/featureSection/tablet.png" alt="" />
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-[24px] font-medium text-center text-[#454545] max-md:text-[20px] max-sm:text-lg">
              Aprendizaje Interactivo <br /> en Módulos
            </h2>
            <p className="text-[#4F4F4F] text-lg text-center max-md:text-[16px] max-sm:text-sm">
            Cuestionarios, tareas, unidades didácticas, sesiones, proyectos con retroalimentación enfocada en la aplicación
             práctica y mucho más. Involucra a los estudiantes con elementos interactivos y situaciones del mundo real. 
            Además, ofrece colaboración en tiempo real para resolver problemas cotidianos de manera conjunta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
