"use client";
import { useSession } from "next-auth/react";

export function Invites() {
  const { data: session } = useSession();
  return (
    <>
      {session?.user?.name ? (
        <p>Convites de {session?.user?.name}</p>
      ) : (
        <p>Carregando</p>
      )}
    </>
  );
}
