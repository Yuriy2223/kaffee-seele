import { NavLinks } from "./NavLinks";

type MobileNavProps = {
  onClick: (id: string) => void;
};

export const MobileNav = ({ onClick }: MobileNavProps) => {
  return (
    <div className="md:hidden mt-4 py-4 border-t border-cream">
      <div className="flex flex-col space-y-4">
        <NavLinks onClick={onClick} variant="mobile" />
      </div>
    </div>
  );
};
