import HomeSuscribeComponent from "./home-subscribe";
import HomeBox from "./home-box";
import HomeVideoBg from "./home-video-bg";

export default function HomeHero() {
  return (
    <div className=" flex items-center justify-center flex-col">
      <HomeVideoBg />
      <HomeBox />
    </div>
  );
}
