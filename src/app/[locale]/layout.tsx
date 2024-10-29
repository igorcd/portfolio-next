import "./globals.css";
import { PageProps } from "@/core/interfaces/page-props";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ weight: ["300", "400", "600", "700"] });

export default function RootLayout(props: PageProps) {
  return (
    <html lang="en">
      <body className={clsx("antialiased", openSans.className)}>
        {props.children}
      </body>
    </html>
  );
}
