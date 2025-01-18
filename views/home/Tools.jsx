"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

const Tools = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col items-center gap-[64px] py-[96px] pb-[156px] overflow-hidden max-md:px-[20px] max-md:py-[48px] max-md:gap-[24px]"
      id="tools"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-4 px-[10vw] max-w-[1240px]"
      >
        <h2 className="text-[#000215] text-[48px] text-center font-semibold max-md:text-[42px] max-sm:text-[32px]">
          Tus herramientas como profesor
        </h2>
        <p className="text-[#4F4F4F] text-lg text-center max-md:text-[16px] max-md:text-sm">
          Si eres docente, ¡Estás de suerte! Con estas herramientas, podrás
          ahorrar casi 7 horas de planificación y elaboración docente
          SEMANALMENTE. Si, has leído bien, ¡SEMANALMENTE! Aquí abajo verás la
          cantidad de herramientas completamente adaptadas al currículo español.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <Swiper
          slidesPerView="auto"
          spaceBetween="30"
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          speed={4000}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: "auto",
              spaceBetween: 30,
            },
          }}
          className="w-full"
          modules={[Autoplay]}
        >
          {cardData.map((card, index) => (
            <SwiperSlide className="sm:!w-fit" key={index}>
              <Card title={card.title} src={card.src} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

const cardData = [
  {
    title: "Esquemas",
    src: "/images/tools/toolImage1.png",
  },
  {
    title: " Edu. Personalizada",
    src: "/images/tools/toolImage2.png",
  },
  {
    title: "Cuestionarios reflexión",
    src: "/images/tools/toolImage3.png",
  },
  {
    title: "Ejercicios Personalizados",
    src: "/images/tools/toolImage4.png",
  },
  {
    title: "Ideador de classes",
    src: "/images/tools/toolImage5.png",
  },
  {
    title: "Preguntas Desarrollo",
    src: "/images/tools/toolImage6.png",
  },
  {
    title: "Creador de Grupos",
    src: "/images/tools/toolImage7.png",
  },
  {
    title: "Generador exam. test",
    src: "/images/tools/toolImage8.png",
  },
  {
    title: "Diseñador de Tareas",
    src: "/images/tools/toolImage11.png",
  },
  {
    title: "Cuenta Cuentos",
    src: "/images/tools/toolImage12.png",
  },
  {
    title: "Traductor Inglés",
    src: "/images/tools/toolImage14.jpeg",
  },
  {
    title: "Feedback de Tareas",
    src: "/images/tools/toolImage16.jpeg",
  },
  {
    title: "Gamificaciones",
    src: "/images/tools/toolImage17.jpeg",
  },
  {
    title: "Unidades Didácticas",
    src: "/images/tools/toolImage9.png",
  },
];

const Card = ({ src, title = "PySpark", index }) => {
  return (
    <motion.div
      className="relative max-sm:min-w-[350px] w-fit"
      whileTap={{ scale: 0.95 }}
    >
      <CustomImage src={src} index={index} />
      <span className="absolute text-[#4F4F4F] text-sm bottom-2 left-1/2 -translate-x-1/2">
        {title}
      </span>
    </motion.div>
  );
};

const CustomImage = ({ src = "/images/tools/toolImage2.png", index }) => {
  const [imageSrc, setImageSrc] = useState(src); // State to handle the image source
  const patternId = `pattern${index}`;
  const imageId = `image${index}`;

  const handleImageError = () => {
    setImageSrc("/images/placeholder.png"); // Fallback placeholder image
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="344"
      height="253"
      viewBox="0 0 344 253"
      fill="none"
      className="max-sm:w-full aspect-square"
    >
      <path
        d="M0 11C0 4.92487 4.92487 0 11 0H333C339.075 0 344 4.92487 344 11V242C344 248.075 339.075 253 333 253H271.5C265.425 253 260.5 248.075 260.5 242V226.438C260.5 220.387 255.613 215.472 249.562 215.438L172 215H93.5C87.4249 215 82.5 219.925 82.5 226V242C82.5 248.075 77.5751 253 71.5 253H11C4.92487 253 0 248.075 0 242V11Z"
        fill={`url(#${patternId})`}
      />
      <defs>
        <pattern
          id={patternId}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref={`#${imageId}`}
            transform="matrix(0.000976562 0 0 0.00132782 0 -0.179842)"
          />
        </pattern>
        <image
          id={imageId}
          xlinkHref={imageSrc}
          className=""
          width="1024"
          height="1024"
          onError={handleImageError} // Error handling for missing images
        />
      </defs>
    </svg>
  );
};

export default Tools;
