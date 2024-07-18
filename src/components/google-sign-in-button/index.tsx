"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export function GoogleSignInButton() {
  // TODO: validar se precisa desse redirect aqui, visto que tem um na home (server)
  const { data: session } = useSession();
  if (session) redirect("/viagens");

  const handleSignIn = () => signIn("google");

  return (
    <button
      onClick={handleSignIn}
      className="flex justify-center items-center gap-2 bg-white text-black py-3 px-4 rounded w-full hover:bg-planejae hover:text-white"
    >
      <Image src="/google-icon.png" width={24} height={24} alt="" />
      Entrar com Google
    </button>
  );
}
