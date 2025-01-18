import Link from "next/link";

const Button = ({ children = "Acceder", to = null }) => {
  const Component = to ? Link : "span";
  return (
    <Component
      {...(to && { href: to })}
      className="px-[48px] py-[16px] rounded-full border border-[#D1D1D1] relative overflow-hidden group text-lg text-[#4F4F4F] cursor-pointer max-md:py-[14px] max-sm:py-[6px] max-sm:text-[16px] max-md:px-10 hover:text-white transition-all max-sm:px-6"
    >
      {children}
      <img
        src="/images/basic/buttonBack.png"
        className="group-hover:opacity-100 opacity-0 -z-[1] transition-all duration-500 absolute inset-0"
        alt="Button Background"
      />
    </Component>
  );
};

export default Button;
