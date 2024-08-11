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
    <div className="bg-zinc-950 flex flex-col h-[calc(100vh-57.6px)] md:h-screen">
      <Header user={user} />
      <div className="p-4 flex justify-center flex-1">
        <div className="max-w-5xl w-full">{children}</div>
      </div>
      <div className="border-t-2 border-zinc-500 p-2 flex justify-center">
        Feito por&nbsp;
        <a
          className="underline italic"
          href="https://felipeassuncao.com"
          target="_blank"
        >
          Felipe Assunção{`'`}
        </a>
        , mochileiro de escritório
      </div>
    </div>
  );
}
