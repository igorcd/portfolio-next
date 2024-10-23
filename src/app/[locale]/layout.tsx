import "./globals.css";
import { PageProps } from "@/core/interfaces/page-props";

export default function RootLayout(props: PageProps) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{props.children}</body>
    </html>
  );
}
