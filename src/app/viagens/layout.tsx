import { Metadata } from "next";
import { redirect } from "next/navigation";

import { Header } from "@components";
import { getUserSession } from "@lib/next-auth";

export const metadata: Metadata = {
  title: "Viagens - Planejaê",
  description:
    "Planejaê é a ferramenta definitiva para você e seus amigos planejarem o roteiro e organizar os detalhes de suas aventuras.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserSession();
  if (!user) redirect("/");

  return (
    <div className="bg-blackg">
      <Header user={user} />
      <div className="p-4">{children}</div>
    </div>
  );
}
