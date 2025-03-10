import type { ReactNode } from "react";
import { MyRuntimeProvider } from "@/app/AmadeusApp";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <MyRuntimeProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </MyRuntimeProvider>
  );
}
