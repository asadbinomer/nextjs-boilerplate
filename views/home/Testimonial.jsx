"use client";

import React from "react";

const Testimonials = () => {
  return (
    <div
      className="py-[96px] bg-[#F5F8FF] flex flex-col items-center gap-[64px] relative max-sm:py-[48px] max-sm:gap-5 max-md:py-[64px]"
      id="testimonial"
    >
      <div className="flex flex-col gap-4 px-[32px] max-w-[770px] max-sm:px-[24px]">
        <h2 className="text-[#000215] text-[48px] text-center font-semibold max-md:text-[42px] max-sm:text-[32px]">
          Opiniones sobre Tututor.Ai
        </h2>
        <p className="text-[#4F4F4F] text-lg text-center max-md:text-[16px] max-md:text-sm">
          Descubre las experiencias reales de docentes que han transformado su enseñanza con nuestra aplicación. Desde novatos entusiastas hasta veteranos de la educación, todos encuentran en tututor.ai una herramienta indispensable.
        </p>
      </div>
      <div className="relative flex items-center gap-5 w-full overflow-hidden">
        <div className="flex items-center gap-5 w-full moving__testimonial">
          {/* Testimonio 1 */}
          <div className="flex flex-col gap-5">
            <SquareCard
              img="1.jpg"
              name="María González"
              jobTitle="Profesora de Matemáticas, Primaria"
              text="Tututor.ai ha transformado completamente mis clases. Ahora cada sesión es dinámica, adaptada al currículo y mucho más efectiva. ¡Es mi herramienta imprescindible para todos los docentes!"
            />
            <RowCard
              img="2.jpg"
              name="Carlos Pérez"
              jobTitle="Profesor de Biología y Geología, Secundaria"
              text="Planificar mis clases con tututor.ai ha reducido drásticamente el tiempo que dedicaba a organizarme, permitiéndome concentrarme en lo más importante: mis estudiantes. El resultado es tremendamente bueno y las sesiones muy dinámicas e innovadoras. Una herramienta, como digo, imprescindible"
            />
          </div>
          {/* Testimonio 2 */}
          <div className="flex flex-col gap-5">
            <RowCard
              img="3.jpg"
              name="Juan López"
              jobTitle="Profesor de Lengua y Literatura, Primaria"
              text="Crear exámenes con tututor.ai es increíblemente sencillo. Ahora puedo enfocarme en diseñar preguntas significativas sin preocuparme del proceso técnico."
            />
            <SquareCard
              img="4.jpg"
              name="Juana Martínez"
              jobTitle="Profesora de Física y Química, Secundaria"
              text="Tututor.ai ha elevado mis clases a otro nivel. El contenido personalizado es exactamente lo que necesitaba para hacer mis lecciones más atractivas y con mucho menos tiempo de planificación de las mismas."
            />
          </div>
          {/* Testimonio 3 */}
          <div className="flex flex-col gap-5">
            <SquareCard
              img="5.jpg"
              name="Luis Ramírez"
              jobTitle="Profesor de Música y Danza, Primaria"
              text="Mis clases de música han cobrado un nuevo ritmo gracias a tututor.ai. Las actividades creativas ahora son mucho más accesibles y fáciles de usar. ¡Además las rúbricas de evaluación son increíbles! El tiempo que he llevado yo haciéndolas..."
            />
            <RowCard
              img="6.jpg"
              name="Pedro Sánchez"
              jobTitle="Profesor de Tecnología, Secundaria"
              text="Las rúbricas de tututor.ai son claras y detalladas, lo que ayuda a mis alumnos a entender mejor lo que se espera de ellos. Sin duda una gran mejora para mis clases. Además, es súper fácil de utilizar."
            />
          </div>
          {/* Testimonio 4 */}
          <div className="flex flex-col gap-5">
            <RowCard
              img="7.jpg"
              name="Javier Fernández"
              jobTitle="Profesor de Educación Física, Secundaria"
              text="Tututor.ai me ha permitido planificar sesiones de mi asignatura Educación Física incluso para cuando no estamos en el gimnasio. Me parece un descubrimiento gigante esta aplicación. ¡Sin duda vale los 12€ y mucho más! En mi caso lo he pagado para todo el año. ¡El partido que le voy a sacar!"
            />
            <SquareCard
              img="8.jpg"
              name="Miguel Torres"
              jobTitle="Profesor de Matemáticas, Secundaria"
              text="Esta herramienta se ha convertido en una extensión esencial de mi trabajo diario. Planificar unidades didácticas nunca fue tan fácil y encima teniendo en cuenta los saberes básicos y criterios de evaluación de Madrid. Increíble."
            />
          </div>
          {/* Testimonio 5 */}
          <div className="flex flex-col gap-5">
            <SquareCard
              img="9.jpg"
              name="Elena Castillo"
              jobTitle="Profesora de Lengua y Literatura, Secundaria"
              text="Estaba un poco dudosa al principio, pero realmente es una aplicación excelente. Las ideas que te da para la elaboración de sesiones, unidades didácticas es simplemente espectacular. Una herramienta increíblemente potente si se sabe usar bien."
            />
            <RowCard
              img="10.jpg"
              name="Roberta Díaz"
              jobTitle="Profesora de Geografía e Historia, Secundaria"
              text="Tuvimos la suerte de tener una formación en mi centro por parte de Álvaro y, cuando te das cuenta lo que es capaz de hacer la aplicación, literalmente te vuela la cabeza. ¡Las horas que estoy ahorrando de elaboración de Unidades Didácticas y de exámenes... Esta aplicación no tiene precio."
            />
          </div>
          {/* Testimonio 6 */}
          <div className="flex flex-col gap-5">
            <SquareCard
              img="11.jpg"
              name="Sara Morales"
              jobTitle="Docente de Educación Física, Primaria"
              text="Mis clases de Educación Física ahora tienen más energía que nunca. Las dinámicas propuestas por tututor.ai mantienen a todos involucrados y activos. Yo tengo algunos alumnos con necesidades especiales y me adapta las sesiones a ellos para que pueda ajustarlas de la mejor manera posible. Verdaderamente buena."
            />
            <RowCard
              img="12.jpg"
              name="Daniela Ruiz"
              jobTitle="Profesora de Tecnología, Secundaria"
              text="Muy buena web. Me la recomendaron y cuando la probé quedé gratamente sorprendida. Muy recomendable"
            />
          </div>
          {/* Testimonio 7 */}
          <div className="flex flex-col gap-5">
            <SquareCard
              img="13.jpg"
              name="Fernando Gómez"
              jobTitle="Profesor de Música, Secundaria"
              text="¡¡Los Tutores Virtuales son una locura!! He sacado varias para mis alumnos y son súper personalizables y luego tenemos completo control de cómo los alumnos interactúan con la IA. Me ha encantado."
            />
            <RowCard
              img="14.jpg"
              name="Isabel Herrera"
              jobTitle="Docente de Filosofía, Secundaria"
              text="Las rúbricas de tututor.ai son justas y fomentan el pensamiento crítico entre mis estudiantes. Es como tener a Sócrates guiando la evaluación."
            />
          </div>
          {/* Testimonio 8 */}
          <div className="flex flex-col gap-5">
            <SquareCard
              img="15.jpg"
              name="Laura Navarro"
              jobTitle="Profesora de Informática, Secundaria"
              text="Está bastante bien, aún no la he probado mucho pero parece muy buena"
            />
            <RowCard
              img="16.jpg"
              name="Marta Silva"
              jobTitle="Profesora de Economía, Secundaria"
              text="Los conceptos económicos complejos se han vuelto accesibles para mis alumnos gracias a tututor.ai. ¡Una herramienta realmente valiosa! Me han encantado los asistentes de explicación de conceptos complejos en simples. Tener un asistente personal que te ayude a explicar ciertos temas de manera sencilla es increíble"
            />
          </div>
          {/* Testimonio 9 */}
          <div className="flex flex-col gap-5">
            <SquareCard
              img="17.jpg"
              name="Olivia Fernández"
              jobTitle="Profesora de Audición y Lenguaje, Secundaria"
              text="El proceso de crear lecciones interactivas con tututor.ai es efectivo y divertido. Está bien"
            />
            <RowCard
              img="18.jpg"
              name="Patricio Varela"
              jobTitle="Profesor de Valores Cívicos y Éticos, Secundaria"
              text="Planificar sesiones significativas sobre ética y valores es ahora mucho más fácil. Tututor.ai es realmente un faro para esos docentes que dedicamos mucho tiempo planificando"
            />
          </div>
          {/* Testimonio 10 */}
          <div className="flex flex-col gap-5">
            <SquareCard
              img="19.jpg"
              name="Andrea López"
              jobTitle="Profesora de Física y Química, Secundaria"
              text="Tututor.ai ha sido el catalizador perfecto para mis clases. Mis estudiantes están más interesados y motivados en aprender Física y Química. Particularmente los ejercicios adaptados al estudiante me han parecido muy útiles para que mis alumnos estén más interesados en la Física. A veces es difícil ser creativa..."
            />
            <RowCard
              img="20.jpg"
              name="Carlos Reyes"
              jobTitle="Profesor de Geografía e Historia, Secundaria"
              text="Me ha parecido increíble que las sesiones y todo lo que te hace tiene en cuenta la Taxonomía de Bloom!!! Llevo en la docencia más de 15 años y llevo usándola desde que empecé. Tener sesiones adaptadas a mi alumnado con diferentes taxonomías me parece simplemente espectacular. 12€ me parece poco para lo que te hace."
            />
          </div>
        </div>
        <div className="absolute inset-0 invisible__gradient"></div>
      </div>
    </div>
  );
};

const SquareCard = ({
  img = "1.jpg",
  name = "",
  jobTitle = "",
  text = "",
}) => {
  return (
    <div className="flex flex-col gap-8 p-6 rounded-3xl bg-white w-[344px]">
      <img
        src={`/testimonios/${img}`}
        alt={name}
        className="w-[100px] aspect-square rounded-full"
      />

      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-[6px]">
          <h3 className="text-[#000215] text-[20px]">{name}</h3>
          <span className="text-sm text-[#B0B0B0]">{jobTitle}</span>
        </div>
        <p className="text-[#4F4F4F]">{text}</p>
      </div>
    </div>
  );
};

const RowCard = ({
  img = "1.jpg",
  name = "",
  jobTitle = "",
  text = "",
}) => {
  return (
    <div className="flex flex-col gap-8 p-6 rounded-3xl bg-white w-[344px]">
      <div className="flex items-center gap-[10px]">
        <img
          src={`/testimonios/${img}`}
          alt={name}
          className="w-[60px] aspect-square rounded-full"
        />
        <div className="flex flex-col items-start gap-[6px]">
          <h3 className="text-[#000215] text-[20px]">{name}</h3>
          <span className="text-sm text-[#B0B0B0]">{jobTitle}</span>
        </div>
      </div>
      <p className="text-[#4F4F4F]">{text}</p>
    </div>
  );
};

export default Testimonials;
