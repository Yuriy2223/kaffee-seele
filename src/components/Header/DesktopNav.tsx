import { NavLinks } from "./NavLinks";

type DesktopNavProps = {
  onClick: (id: string) => void;
  activeSection: string;
};

export const DesktopNav = ({ onClick, activeSection }: DesktopNavProps) => {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      <NavLinks
        onClick={onClick}
        activeSection={activeSection}
        variant="desktop"
      />
    </div>
  );
};
