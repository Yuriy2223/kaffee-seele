import { NavLinks } from "./NavLinks";

type DesktopNavProps = {
  onClick: (id: string) => void;
};

export const DesktopNav = ({ onClick }: DesktopNavProps) => {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      <NavLinks onClick={onClick} variant="desktop" />
    </div>
  );
};
