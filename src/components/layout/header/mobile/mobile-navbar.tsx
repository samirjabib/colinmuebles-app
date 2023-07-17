"use client";
import { useHeaderStore } from "../store/header-store";
import { Cross as Hamburger } from "hamburger-react";
import MobileNav from "./mobile-nav";

export default function NavbarMobile() {
  const { navBarOpen, setNavBarOpen } = useHeaderStore();

  return (
    <div>
      <Hamburger
        toggled={navBarOpen}
        onToggle={() => setNavBarOpen(!navBarOpen)}
        direction="left"
        size={25}
        color="white"
      />
      <MobileNav navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
    </div>
  );
}
