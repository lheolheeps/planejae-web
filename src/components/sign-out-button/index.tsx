"use client";

import { signOut } from "next-auth/react";

import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SignOutButton() {
  const handleSignOut = () => signOut();

  return (
    <button
      onClick={handleSignOut}
      className="flex justify-center items-center gap-2 bg-white text-black py-3 px-4 rounded hover:bg-planejae hover:text-white"
    >
      <FontAwesomeIcon icon={faSignOut} width={24} />
      Sair
    </button>
  );
}
