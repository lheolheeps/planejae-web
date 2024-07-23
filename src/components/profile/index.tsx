"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToggle } from "@hooks";
import { User } from "@types";

type ProfileProps = {
  user: User;
};

export function Profile({ user }: ProfileProps) {
  const [isDropdownOpen, handleDropdown, forceDropdown] = useToggle(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    )
      forceDropdown(false);
  };

  const handleSignOut = () => signOut();
  // TODO apagar conta e todos os dados do usuario (exigir detalhes e pedir confirmação via modal)
  const handleDeleteAccount = () => signOut();
  // TODO levar usuario para pagina de pagamento do pro (exigir detalhes e pedir confirmação via modal)
  const handlePremium = () => signOut();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handlePremium}
        className="border-2 rounded-md p-2 bg-planejae hover:bg-black hover:border-planejae"
      >
        ASSINAR PREMIUM
      </button>
      <div className="relative" ref={dropdownRef}>
        <a
          href="#"
          onClick={handleDropdown}
          aria-label="Abrir menu de opções"
          className="rounded-full focus:border-spacing-4 cursor-pointer"
        >
          <Image
            alt=""
            width={40}
            height={40}
            src={user?.image || "/profile.png"}
            className="rounded-full object-cover"
          />
        </a>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-planejae rounded-md shadow-lg py-2">
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 py-2 px-3 hover:bg-slate-500 w-full"
            >
              <FontAwesomeIcon icon={faSignOut} width={24} />
              <span>Sair</span>
            </button>
            <hr className="mb-2 mt-2" />
            <button
              onClick={handleDeleteAccount}
              className="flex items-center gap-2 py-2 px-3 hover:bg-slate-500 w-full"
            >
              <FontAwesomeIcon icon={faTrashAlt} width={24} />
              <span>Excluir Conta</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
