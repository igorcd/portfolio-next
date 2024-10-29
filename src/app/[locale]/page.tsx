"use client";

import Window from "@/ui/components/window/Window";
import ControlCentre from "@/ui/shell/control-centre/ControlCentre";
import { useOnMounted } from "@/utils/on-mounted";
import Image from "next/image";

export default function Home() {
  const mounted = useOnMounted();

  if (!mounted) return null;

  return (
    <div className="h-screen relative">
      <Image
        src="/images/bg-hor.webp"
        alt="alt"
        fill
        sizes="1920px"
        draggable={false}
        className="object-cover object-center max-md:hidden"
        priority
      />
      <Image
        src="/images/bg-ver.webp"
        alt="alt"
        fill
        draggable={false}
        sizes="1920px"
        className="object-cover object-center md:hidden"
        priority
      />

      <ControlCentre />
    </div>
  );
}
