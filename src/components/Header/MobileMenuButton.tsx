import { Menu, X } from "lucide-react";

type MobileMenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const MobileMenuButton = ({
  isOpen,
  onToggle,
}: MobileMenuButtonProps) => {
  return (
    <button
      className="lg:hidden text-warm-brown hover:text-sage-green
       transition-colors duration-200 p-2 -m-2"
      onClick={onToggle}
      aria-label={isOpen ? "Закрити меню" : "Відкрити меню"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      data-testid="mobile-menu-button"
    >
      <div className="relative w-6 h-6">
        <Menu
          className={`w-6 h-6 absolute transition-all duration-200 ${
            isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
          }`}
        />
        <X
          className={`w-6 h-6 absolute transition-all duration-200 ${
            isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
          }`}
        />
      </div>
    </button>
  );
};
