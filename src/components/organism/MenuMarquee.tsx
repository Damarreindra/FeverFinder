import Marquee from "../ui/marquee";

const logos = [
  {
    name: "Microsoft",
    img: "../../../public/images/sick.png",
  },
  {
    name: "Apple",
    img: "../../../public/images/sick1.png",
  },
  {
    name: "Google",
    img: "../../../public/images/sick2.png",
  },

];

export function MenuMarquee() {
  return (
    <div className="relative flex mx-auto h-full w-56 flex-col items-center justify-center gap-4 overflow-hidden ">
      <div className="flex flex-row gap-4 [perspective:300px]">
        <Marquee
          className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-y-0 -bottom-1 w-full bg-gradient-to-t from-white dark:from-background"></div>

    </div>
  );
}
