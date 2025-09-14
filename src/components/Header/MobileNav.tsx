import { NavLinks } from "./NavLinks";

type MobileNavProps = {
  onClick: (id: string) => void;
  activeSection: string;
};

export const MobileNav = ({ onClick, activeSection }: MobileNavProps) => {
  return (
    <div
      id="mobile-menu"
      className="lg:hidden mt-4 py-4 border-t border-cream
       bg-warm-white/95 backdrop-blur-sm rounded-b-lg"
      role="navigation"
      aria-label="Мобільна навігація"
    >
      <div className="flex flex-col space-y-4">
        <NavLinks
          onClick={onClick}
          activeSection={activeSection}
          variant="mobile"
        />
      </div>
    </div>
  );
};
