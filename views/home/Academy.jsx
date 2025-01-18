"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Academy = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const openPopup = (url) => {
    setSelectedVideo(url);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedVideo("");
  };

  return (
    <div
      id="academy"
      className="flex flex-col items-center gap-[64px] px-[6vw] py-[96px] pb-[156px] overflow-hidden"
    >
      <div className="flex flex-col gap-4 max-w-[720px]">
        <h2 className="text-[#000215] text-[48px] text-center font-semibold">
          Academia
        </h2>
        <p className="text-[#4F4F4F] text-lg text-center">
          Dispondrás de videos de CADA HERRAMIENTA para sacarle el máximo
          partido a todo lo que hay en la web.
        </p>
      </div>

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
        {allVideos.map((card) => (
          <SwiperSlide key={card.id} className="sm:!w-fit">
            <Card
              link={card.url}
              src={card.thumbnail}
              onPlay={() => openPopup(card.url)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="!rounded-lg !overflow-hidden bg-white shadow-lg max-w-[800px] w-full relative">
            <div>
              <button
                className="absolute py-1 rounded-full bg-white px-3.5 leading-7 pb-2 top-2 right-2 text-3xl"
                onClick={closePopup}
              >
                &times;
              </button>
              <iframe
                width="100%"
                height="400px"
                src={selectedVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Card = ({ src, onPlay }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden w-full sm:w-[400px]">
      <img src={src} alt="" />
      <div
        onClick={onPlay}
        className="cursor-pointer transition-all duration-500 hover:max-w-[240px] absolute p-3 pr-5 bottom-5 left-5 overflow-hidden max-w-[60px]  rounded-full flex items-center justify-start max-sm:gap-2 max-sm:p-2 max-sm:pr-3 max-sm:max-w-[50px] gap-3 bg-white"
      >
        <PlayIcon />
        <span className="text-[#4F4F4F] text-lg max-md:text-[16px] max-sm:text-sm">
          Play
        </span>
      </div>
    </div>
  );
};

const allVideos = [
  {
    id: 48,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/uldtnsl15cnkmztsifhgi/texteditor.png?rlkey=6cpqb8ji8w4zagd87qdll8qvw&dl=0.png",
    url: "https://www.youtube.com/embed/dLiAud_HXyE",
  },
  {
    id: 49,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/na3u67s2ano7m1buujhu3/favoritos.png?rlkey=m2yorwlauc2zb26zbfmxurixh&dl=0.png",
    url: "https://www.youtube.com/embed/yiF33-XVUrA",
  },
  {
    id: 1,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/g9khl1nmgg7ol7ng8wp7a/cuestionariostipotest.png?rlkey=11fjy1p3v419vtcaa81wwkdhh&dl=0.png",
    url: "https://www.youtube.com/embed/8anyl6mjisI",
  },
  {
    id: 2,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/zr8dh1a0va13yvm9enfqi/mapas.png?rlkey=78ztr2knwb9lpgt48zzys5np7&dl=0.png",
    url: "https://www.youtube.com/embed/l3TKRXAMUzM",
  },
  {
    id: 3,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/d0i7n42vhvfl7cbce3dzz/resumidor.png?rlkey=g7mhszyapw0xw3k3gr7w2b5no&dl=0.png",
    url: "https://www.youtube.com/embed/bVwLNKTGudQ",
  },
  {
    id: 4,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/487btd8x7a0cv6fiwocmr/escritorinteligente.png?rlkey=t0jg7369f4flxn25vwkn1box9&dl=0.png",
    url: "https://www.youtube.com/embed/JQmYyfE_-cI",
  },
  {
    id: 5,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/sjsmkmnjie8cy0esbvggi/gamificaciones.png?rlkey=hhqv3cmi7ayhdwun9ngzioym3&dl=0-png",
    url: "https://www.youtube.com/embed/5YBNGD3ut_c",
  },
  {
    id: 6,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/yl2li7f87dtfgv4pmfow1/explain.png?rlkey=kp1tgbn29v0jutn0yrdx6gbaz&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 7,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/3c3y5uymoftn5ichdxjor/ejerciciosadaptados.png?rlkey=r3icsoy58q7v1uw9zkut9fdyg&dl=0.png",
    url: "https://www.youtube.com/embed/72ZKwtY5MTc",
  },
  {
    id: 8,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/tdv7m37zuugvjamwx0yl4/develop.png?rlkey=nlca6h21a75rxntwcscko16tu&dl=0.png",
    url: "https://www.youtube.com/embed/cjAh-ZCDLfY",
  },
  {
    id: 9,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/24uq97s84yk1tsct8pmwq/ideadorsesiones.png?rlkey=fz4ikxz7md6nfpmaphmdy4qgz&dl=0.png",
    url: "https://www.youtube.com/embed/zNu7Pd13vIQ",
  },
  {
    id: 10,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/d1197c8cgzwru9vitahjw/personalized.png?rlkey=w2353qbgyeocdcoklvt3372ot&dl=0.png",
    url: "https://www.youtube.com/embed/DeNskfiDFgg",
  },
  {
    id: 11,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/rik5xxkivh5ujjowkqhj7/didacticunits.png?rlkey=styqzfyoh42b3y0kgwk2u7l08&dl=0.png",
    url: "https://www.youtube.com/embed/yRC_n15ODiw",
  },
  {
    id: 12,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/d339vvl0j8fp2ls9g4rhg/listasvocabulario.png?rlkey=a0vd7odkihmxntp5627mjfsyo&dl=0.png",
    url: "https://www.youtube.com/embed/TGgS2QkiHl8",
  },
  {
    id: 13,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/t9q3gujo083rxxyl60fa9/laboratorio.png?rlkey=44ksn6j63554p01irw77rh1ci&dl=0.png",
    url: "https://www.youtube.com/embed/9857PU2aCPU",
  },
  {
    id: 14,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/zu4uvbj3j4wwtmn31lzab/evaluationrubrics.png?rlkey=p84bn4avt0hfh5ps9bls1losn&dl=0.png",
    url: "https://www.youtube.com/embed/k_0194-va94",
  },
  {
    id: 15,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/b89py5qt4hmittx88vyu9/conexion.png?rlkey=koxhms4jfxfepncwh8ar5z712&dl=0.png",
    url: "https://www.youtube.com/embed/vvEz6txsZhY",
  },
  {
    id: 16,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/iia8jx235v4dzrg63qfhs/traductor.png?rlkey=rp1znn1s3rcrnxtljkbg3ezkb&dl=0.png",
    url: "https://www.youtube.com/embed/_-brPta1TEE",
  },
  {
    id: 17,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/7lr8aj2akxov12trdw89w/adaptedgroups.png?rlkey=syl36hb6wwaw91qxvkm3vz3df&dl=0.png",
    url: "https://www.youtube.com/embed/JhHH1NuhRfo",
  },
  {
    id: 18,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/lowlyrfcbto3xsv3ixlu8/taskdesigner.png?rlkey=6b6qcoiaa1naa2npi44js5fxh&dl=0",
    url: "https://www.youtube.com/embed/LtQzxGuvca4",
  },
  {
    id: 19,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/zst2gp701httm9k0qgdcp/learningsituations.png?rlkey=1f6spcejeq1rqxahjixlqnqmr&dl=0.png",
    url: "https://www.youtube.com/embed/gjoSvK-e_HE",
  },
  {
    id: 20,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/300hjqlpzbwes1a42ppw2/taskfeedback.png?rlkey=fd4l6mnkob5a2t75pmz4d2o8j&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 21,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/ta2m2cniftp4096kbx3db/vocabularytext.png?rlkey=feu2zanrga5bpa3elgzgcybsh&dl=0.png",
    url: "https://www.youtube.com/embed/dmnnmyy4AKQ",
  },
  {
    id: 22,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/itwly8tnauo6e6ku8mlay/informesevaluacion.png?rlkey=7c4lbaobcxcmj5dnz3qetcb0t&dl=0.png",
    url: "https://www.youtube.com/embed/fGepSDBAESg",
  },
  {
    id: 23,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/gnklx8tvkxsm3184iid7j/cuestionarioreflexion.png?rlkey=0j3lmn6qkkhrkk6akxn8n844d&dl=0",
    url: "https://www.youtube.com/embed/TTB51FRMe6Y",
  },
  {
    id: 24,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/h5vx8hqvtajctdgn49xve/conecta.png?rlkey=e557dx2hqtg36563fzxoab959&dl=0.png",
    url: "https://www.youtube.com/embed/yDUTmGvpT6E",
  },
  {
    id: 25,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/0z3rgyc1gvs03qhn6stuu/conceptualunderstanding.png?rlkey=zpwwwjqd7tpnn7tacr928v1kw&dl=0.png",
    url: "https://www.youtube.com/embed/QBaBhf6Mzco",
  },
  {
    id: 26,
    duration: "1:43",
    thumbnail:
      "https://dl.dropbox.com/scl/fi/xy272iebbyxe0payey7lb/ideascomunes.png?rlkey=4rb2c7dbbqbpityu915m21kmj&dl=0.png",
    url: "https://www.youtube.com/embed/jQc8NdO7SbI",
  },
  {
    id: 27,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/iv1fsza3wq22aav6d00pa/creadortrabajo.png?rlkey=8trav5ctk4wn3frv1stiqs4k1&dl=0.png",
    url: "https://www.youtube.com/embed/UjuPmbpkMwY",
  },
  {
    id: 28,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/gloqj65jjjg4jtcg658jo/cuentacuentos.png?rlkey=8da5locw3qu72hekoe8fflk87&dl=0.png",
    url: "https://www.youtube.com/embed/9BfFosi9K1A",
  },
  {
    id: 29,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/on5hs23cuzcp74hs0zl7x/profesormatematicas.png?rlkey=tkrh78mt88e3xu0wo2jjujqxx&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 30,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/rbvl7gayz5gdhyhuptbw4/profesortecnologia.png?rlkey=lqcs3z0rjm03kkde76eyoe0op&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 31,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/8d4dmldmg841kq2w504p8/profesorliteratura.png?rlkey=vmqk6t5u3ulkn6kvaw4jscf8k&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 32,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/4e4c7orygygn2oqp0j4wt/profesorsociales.png?rlkey=gfrf61gb89hvhyz94ell323fr&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 33,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/bdu07j1iv257u6kzzz64e/orientador.png?rlkey=04delk05x9jhuzfnv6oqr2xxl&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 34,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/rg155uja5shh8lsvmap2s/profesoraingles.png?rlkey=0bgmnlbk42fcgs5ns0bhy8pw4&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 35,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/ch3tr0wa9zaoegs11cjlp/profesorarte.png?rlkey=jxdt8h2tus4rk74lbcyy5ngim&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 36,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/fjw188lqqf4jg8z9ktkoc/asistentetodoenuno.png?rlkey=pvbl5rthcrxng0rh9kz7tv51n&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 37,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/smyd3jyrhr1jx0noe4l6a/asistenteprofemagico.png?rlkey=n5v6kvra5egkqhn47blroanr4&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 38,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/delro9jqy1rts9zf01ase/aulasvirtuales.png?rlkey=7iftscqzwqzaiplys2pzcimyc&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 39,
    duration: "3:20",
    thumbnail:
      "https://dl.dropbox.com/scl/fi/3m06g6ofx5fiqlg699woi/asistentedigital.png?rlkey=60hq3929l9w53j886qv9vghfk&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 40,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/fzhagmb1i2ruza70srhhd/asistentesalidas.png?rlkey=cyxd1w2lbxkxlpsq313zob4nx&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 41,
    thumbnail:
      "https://DL.dropbox.com/scl/fi/1gnhjargwqu5b2bwzttxm/asistenteproyectos.png?rlkey=li1dq04grtlpo3490n2sos182&dl=0",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 42,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/cvnsbuhv9k8ixob88ya9v/asistenteambiente.png?rlkey=gd9oiarr42z3pv60fnnvjq0zj&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 43,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/cr0ig09ka122l58ccmccd/asistentereciclaje.png?rlkey=zp3yy6zep0nooe8wjokfev3ku&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 44,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/t04b2swoyhre2dz7iebsg/asistentecarbono.png?rlkey=jntaovassvgn2w7x4o0xg6mt6&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 45,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/3ve8sxs2whs1br3erczuk/aulasvirtualescomunidad.png?rlkey=ofr4tc48vazjcjaem56oqudn4&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 46,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/an83vejxwtdwbjeinfito/aulasvirtualesultimas.png?rlkey=545hlouejfn2cp1apxujam6jm&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
  {
    id: 47,
    thumbnail:
      "https://dl.dropbox.com/scl/fi/pujzfc4gws0j7y2y21rae/aulasvirtualesmis.png?rlkey=5lmqjdla8b852tgmsij1natbo&dl=0.png",
    url: "https://www.youtube.com/embed/iIePAngb9cM",
  },
];

const PlayIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      className="min-w-[37px]"
    >
      <path
        d="M9.5 15.7137V20.2863C9.5 24.6271 9.5 26.7974 10.7621 27.6749C12.0242 28.552 13.7502 27.5814 17.2026 25.6403L21.2684 23.3537C25.4228 21.0177 27.5 19.8497 27.5 18C27.5 16.1503 25.4228 14.9823 21.2684 12.6463L17.2026 10.3598C13.7502 8.41857 12.0242 7.44794 10.7621 8.3252C9.5 9.20246 9.5 11.3729 9.5 15.7137Z"
        fill="black"
      />
    </svg>
  );
};

export default Academy;
