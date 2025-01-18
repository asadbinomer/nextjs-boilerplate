"use client";

import React, { useState } from "react";

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(0); // Set the first FAQ as open by default

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question:
        "¿Qué tipo de herramientas ofrece el servicio de inteligencia artificial?",
      answer:
        "Nuestro servicio ofrece una amplia gama de herramientas como generadores de exámenes tipo test, creadores de esquemas y mapas mentales, ideadores de sesiones de clase, creador de unidades didácticas, listas de vocabulario, rúbricas de evaluación y más. Estas herramientas están diseñadas para facilitar la planificación, evaluación y el aprendizaje personalizado.",
    },
    {
      question: "¿Cómo puedo acceder a las herramientas?",
      answer:
        "Una vez registrado en la plataforma, podrás acceder a todas las herramientas desde el panel de inicio. Simplemente selecciona la herramienta que deseas utilizar y sigue las instrucciones proporcionadas para comenzar.",
    },
    {
      question: "¿Puedo personalizar las herramientas según mis necesidades?",
      answer:
        "Sí, cada herramienta está diseñada para ser altamente personalizable. Puedes ajustar los parámetros de los generadores de exámenes, crear esquemas específicos según tus temas de interés, según tu temario o inlcuso diseñar unidades didácticas adaptadas a tu currículo.",
    },
    {
      question:
        "¿El contenido está adaptado al currículo español de mi Comunidad Autónoma?",
      answer:
        "Sí, todas las herramientas están adaptadas al currículo de cada Comunidad Autónoma, pudiendo seleccionar en todo momento los criterios de evaluación correspondientes y los saberes básicos de cada asignatura. Próximamente tendremos las 17 CCAA incluidas",
    },
    {
      question:
        "¿Puedo utilizar las herramientas para diferentes niveles educativos?",
      answer:
        "Sí, nuestras herramientas son aptas para todos los niveles educativos, desde educación primaria hasta niveles superiores. Puedes seleccionar el nivel apropiado cuando utilices cada herramienta para asegurarte de que los recursos generados sean adecuados para tus estudiantes.",
    },
    {
      question:
        "¿Cómo se protegen los datos de mis estudiantes y mi información personal?",
      answer:
        "Tomamos la seguridad y privacidad muy en serio. Todos los datos personales y de los estudiantes se almacenan de forma segura y cumplen con los más altos estándares de protección de datos.",
    },
    {
      question:
        "¿Están las actualizaciones y nuevas herramientas incluidas en el precio?",
      answer:
        "Sí, todas las actualizaciones y nuevas herramientas que vayamos lanzando están incluidas cuando en los planes básicos y profesionales. Tendrás acceso automático a las versiones más recientes sin costo adicional.",
    },
    {
      question: "¿Puedo obtener una prueba gratuita del servicio?",
      answer:
        "Sí, ofrecemos una versión gratuita limitada para que puedas probar las funcionalidades básicas. Para obtener acceso completo a todas las herramientas, puedes suscribirte a uno de nuestros planes premium.",
    },
    {
      question:
        "¿Cómo puedo recibir soporte si tengo problemas con alguna herramienta?",
      answer:
        "Si encuentras algún problema o tienes dudas sobre cómo utilizar alguna herramienta, puedes acceder a nuestro soporte técnico en línea. Tenemos un asistente virtual que te ayudará en todo lo que necesites. Si tu duda no es resulta, escríbenos a info@tututor.ai y nuestro equipo te ayudará en un plazo de 24 horas.",
    },
    {
      question: "¿Existen videos explicativos de las herramientas?",
      answer:
        "Sí, cada herramienta tiene su propio video explicativo que te guiará paso a paso en su uso. Todos los videos tienen una duración entre 1 y 3 minutos para hacerlos lo más accesibles posibles. Sabemos que el tiempo de un profesor es muy importante",
    },
    {
      question: "¿Hay política de devoluciones?",
      answer:
        "Lo sentimos, pero no podemos ofrecer devoluciones actualmente.",
    },
    {
      question: "¿Realmente me merece la pena comprarlo?",
      answer:
        "Según nuestras métricas (probadas en más de 150 profesores), con Tututor.Ai puedes reducir tu tiempo de planificación semanal de 7.5 horas a solo 1.25 horas, tu tiempo mensual de 32.25 horas a 6.54 horas, y tu tiempo anual de 387 horas a solo 78.47 horas usando nuestras herramientas.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Actualmente aceptamos tarjeta de crédito y débido VISA, Mastercard o American Express entre otros.",
    },
    {
      question: "¿Es seguro pagar?",
      answer:
        "Por supuesto. Nuestro sistema de pago es 100%. El proceso de pago se hace a través de Stripe. Nosotros no almacenamos ningún registro de tarjetas. Los estándares de Stripe en cuanto a seguridad son de los más altos del mundo actualmente",
    },
  ];

  return (
    <div id="faqs" className="flex flex-col items-center gap-16 px-[10vw] py-24 overflow-hidden max-md:pb-[64px] max-md:py-[48px] max-sm:gap-[24px] max-md:px-[24px]">
      <div className="flex flex-col gap-4 max-w-[720px]">
        <h2 className="text-[#000215] text-4xl text-center font-semibold max-md:text-[42px] max-sm:text-[32px]">
          Preguntas Frecuentes. FAQ
        </h2>
        <p className="text-[#4F4F4F] text-lg text-center max-md:text-[16px] max-md:text-sm">
          Aquí encontrarás un listado de las preguntas más frecuentes las cuales
          intentaremos resolver Igualmente, si tienes dudas, recuerda que puedes
          contactarnos en info@tututor.ai
        </p>
      </div>
      <div className="flex flex-col gap-8 w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 px-8 rounded-3xl max-sm:px-4 max-sm:rounded-xl transition-all duration-500 ${
              openFaq === index
                ? "py-8 max-sm:py-4 bg-[#F5F8FF] max-h-[350px]"
                : "py-4 max-sm:py-2 cursor-pointer max-h-[45px] overflow-hidden"
            }`}
            onClick={() => toggleFaq(index)}
          >
            <div className="flex items-center justify-between gap-3">
              <h3
                className={`text-[#000215] text-2xl font-semibold max-md:text-xl max-sm:text-lg ${
                  openFaq !== index && "truncate w-full"
                }`}
              >
                {faq.question}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d={
                    openFaq === index ? "M12 8.5V16.5M16 12.5H8" : "M16 12.5H8"
                  }
                  stroke="#4F4F4F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 12.5C2.5 8.02166 2.5 5.78249 3.89124 4.39124C5.28249 3 7.52166 3 12 3C16.4783 3 18.7175 3 20.1088 4.39124C21.5 5.78249 21.5 8.02166 21.5 12.5C21.5 16.9783 21.5 19.2175 20.1088 20.6088C18.7175 22 16.4783 22 12 22C7.52166 22 5.28249 22 3.89124 20.6088C2.5 19.2175 2.5 16.9783 2.5 12.5Z"
                  stroke="#4F4F4F"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <p className="text-lg text-[#4F4F4F] max-w-[940px] max-sm:text-sm">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
