import React from "react";

const Footer = () => {
  return (
    <div className="px-[24px] py-[48px] flex items-start justify-between max-md:px-[20px] max-[1000px]:flex-col gap-[32px]">
      <div className="flex flex-col gap-[72px] max-w-[364px] items-start">
        <div className="flex flex-col gap-4 items-start w-full">
          <img
            src="/images/basic/footerLogo.png"
            alt="Frosty Dynamics Logo"
            className="w-[234px]"
          />
          <p className="text-lg text-[#454545]">
            Únete a nuestra comunidad de más de 1.500 profesores que usan nuestra web de manera diaria
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start w-full">
          <span className="text-lg text-[#454545]">Síguenos en:</span>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.path} className="cursor-pointer">
                <img src={link.icon} alt={link.alt} className="w-[24px] h-[24px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-start gap-8 flex-wrap">
        {footerLinks.map((section, index) => (
          <div key={index} className="flex flex-col gap-8">
            <span className="text-2xl font-medium text-[#454545]">
              {section.name}
            </span>
            <div className="flex flex-col gap-3">
              {section.nest.map((item, subIndex) => (
                <a
                  key={subIndex}
                  href={item.path}
                  className="text-lg text-[#6D6D6D] hover:text-[#000215]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const socialLinks = [
  {
    alt: "Instagram",
    icon: "/icons/instagram.svg",
    path: "https://www.instagram.com/tututor.ai?igsh=MTUzdjd3bjZjZHp2NA==",
  },
  {
    alt: "Facebook",
    icon: "/icons/facebook.svg",
    path: "https://www.facebook.com/profile.php?id=61560650222798",
  },
  {
    alt: "Youtube",
    icon: "/icons/youtube.svg",
    path: "https://www.youtube.com/@Tututorai/videos",
  },
];

const footerLinks = [
  {
    name: "Diseña Inspiración",
    nest: [
      {
        name: "Inspira y crea",
        path: "#",
      },
    ],
  },
  {
    name: "Recursos creativos",
    nest: [
      {
        name: "Blog (próximamente)",
        path: "#",
      },
    ],
  },
  {
    name: "Comunidad Tutores Virtuales",
    nest: [
      {
        name: "En construcción",
        path: "#",
      },
    ],
  },
];

export default Footer;