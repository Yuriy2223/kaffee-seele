import clsx from "clsx";

type NavLinksProps = {
  onClick: (id: string) => void;
  activeSection: string;
  variant?: "desktop" | "mobile";
};

export const NavLinks = ({
  onClick,
  activeSection,
  variant = "desktop",
}: NavLinksProps) => {
  const links = [
    { id: "home", label: "Головна" },
    { id: "menu", label: "Меню" },
    { id: "about", label: "Про нас" },
    { id: "events", label: "Події" },
    { id: "coffee-quiz", label: "Тест кави" },
    { id: "contact", label: "Контакти" },
  ];

  return (
    <>
      {links.map(({ id, label }) => {
        const isActive = activeSection === id;

        return (
          <button
            key={id}
            onClick={() => onClick(id)}
            className={clsx(
              "relative text-xl transition-all duration-300 ease-out",

              !isActive && [
                "text-warm-brown",
                "hover:text-sage-green hover:scale-105",
                "before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5",
                "before:bg-sage-green before:transition-all before:duration-300",
                "hover:before:w-full",
              ],

              isActive && [
                "text-sage-green font-medium scale-105",
                "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5",
                "after:bg-sage-green after:rounded-full",
              ],

              variant === "mobile" && "text-left py-1",
              variant === "desktop" && "px-1"
            )}
          >
            {label}
            {isActive && (
              <span
                className={clsx(
                  "absolute -top-1 -right-1 w-2 h-2 bg-sage-green rounded-full",
                  "animate-pulse",
                  variant === "mobile" && "hidden"
                )}
              />
            )}
          </button>
        );
      })}
    </>
  );
};
