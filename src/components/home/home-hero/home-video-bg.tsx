export default function HomeVideoBg() {
  return (
    <div className="absolute w-full h-full -z-10">
      <video
        width="100%"
        height="100%"
        autoPlay
        loop
        className="min-w-[90vw] lg:min-w-[50vw] absolute left-0 top-0 -z-10 h-full w-full object-cover"
      >
        <source
          src="https://wander.sfo3.cdn.digitaloceanspaces.com/landing-hero-wander-st-george-island-layout.webm"
          type="video/webm"
        ></source>
      </video>
    </div>
  );
}
