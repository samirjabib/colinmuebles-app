import { Button } from "@/design-system/ui/button";
import { useEffect, useRef } from "react";
import MobileNavItem from "./mobile-nav-item";

export default function MobileNav({
  navBarOpen,
  setNavBarOpen,
}: {
  navBarOpen: boolean;
  setNavBarOpen: (by: boolean) => void;
}) {
  const menuMobileRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick, true);

    return document.removeEventListener("click", handleOutSideClick, false);
  }, []);

  const handleOutSideClick = ({ target }: any) => {
    if (!menuMobileRef.current?.contains(target)) {
      setNavBarOpen(false);
    }
  };
  return (
    <>
      {navBarOpen && (
        <ul className="bg-secondary right-14 absolute top-16 w-60 p-4 rounded-lg text-primary">
          {Array.from({ length: 4 }).map((_, i) => (
            <MobileNavItem key={i} />
          ))}
          <div className="w-full flex flex-col gap-y-3">
            <Button>Sign In</Button>
          </div>
        </ul>
      )}
    </>
  );
}
