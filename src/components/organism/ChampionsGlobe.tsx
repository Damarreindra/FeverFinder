import OrbitingCircles from "../ui/orbiting-circles";

export function ChampionsGlobe() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Champs
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={50}
      >
      <img src="../images/a.webp" alt="" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={50}
      >
      <img src="../images/b.webp" alt="" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={80}
        duration={20}
        reverse
      >
      <img src="../images/c.webp" alt="" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={120}
        duration={20}
        delay={20}
        reverse
      >
             <img src="../images/d.webp" alt="" />

      </OrbitingCircles>
      <div className="pointer-events-none absolute inset-y-0 -bottom-1 w-full bg-gradient-to-t from-white dark:from-background"></div>

    </div>
  );
}

