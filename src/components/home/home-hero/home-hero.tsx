import HomeSuscribeComponent from "./home-subscribe";
import HomeBoxFloat from "./home-box-float";
import HomeVideoBg from "./home-video-bg";

export default function HomeHero() {
  return (
    <div className=" flex items-center justify-center flex-col relative py-44 sm:py-32">
      <HomeVideoBg />
      <HomeBoxFloat />
    </div>
  );
}
