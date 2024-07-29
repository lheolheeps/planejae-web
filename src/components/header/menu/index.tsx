"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MENU } from "../constants";

export function Menu() {
  const pathname = usePathname();

  return (
    <ul className="gap-4 hidden md:flex md:items-center">
      {MENU.map((item, idx) => (
        <li key={`menu-${idx}`} className="text-zinc-500">
          <Link
            className={`${item.className} ${
              pathname === item.href ? "text-white" : ""
            }`}
            href={item.href}
          >
            {item.showIconOnDesktop && (
              <FontAwesomeIcon icon={item.icon} width={16} />
            )}
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
