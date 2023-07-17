import { Logo } from "@/design-system";
import MobileNavbar from "./mobile/mobile-navbar";

export default function Header() {
  return (
    <div className=" wrapper wrapper-mobile w-full  py-6 absolute top-0 left-0 right-0">
      <div className="flex justify-between items-center ">
        <div>
          <Logo />
        </div>
        <div>
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
}
