import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen relative">
      <Image src="/images/bg-hor.webp" alt="alt" fill className="object-cover object-center max-md:hidden" priority/>
      <Image src="/images/bg-ver.webp" alt="alt" fill className="object-cover object-center md:hidden" priority/>
    </div>
  )
}
