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
      className="md:hidden text-warm-brown"
      onClick={onToggle}
      data-testid="mobile-menu-button"
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};
