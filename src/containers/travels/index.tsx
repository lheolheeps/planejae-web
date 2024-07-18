"use client";
import { useSession } from "next-auth/react";

export function Travels() {
  const { data: session } = useSession();
  return <p>Viagens de {session?.user?.name || "Visitante"}</p>;
}
