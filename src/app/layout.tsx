import type { Metadata } from "next";
import "./globals.css";

import { AuthProvider } from "@providers";

export const metadata: Metadata = {
  title: "Planejaê: Seu próximo destino começa aqui!",
  description:
    "Planejaê é a ferramenta definitiva para você e seus amigos planejarem o roteiro e organizar os detalhes de suas aventuras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
