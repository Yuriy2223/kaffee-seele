type NavLinksProps = {
  onClick: (id: string) => void;
  variant?: "desktop" | "mobile";
};

export const NavLinks = ({ onClick, variant = "desktop" }: NavLinksProps) => {
  const links = [
    { id: "home", label: "Головна" },
    { id: "menu", label: "Меню" },
    { id: "about", label: "Про нас" },
    { id: "events", label: "Події" },
    { id: "coffee-quiz", label: "Тест кави" },
    { id: "contact", label: "Контакти" },
  ];

  const baseClasses =
    "text-warm-brown text-xl hover:text-sage-green transition-colors duration-300";
  const mobileClasses = "text-left";
  const desktopClasses = "";

  return (
    <>
      {links.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onClick(id)}
          className={`${baseClasses} ${
            variant === "mobile" ? mobileClasses : desktopClasses
          } `}
        >
          {label}
        </button>
      ))}
    </>
  );
};
