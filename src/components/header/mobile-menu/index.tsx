"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToggle } from "@hooks";

import { MENU } from "../constants";

export function MobileMenu() {
  const [isDropdownOpen, handleDropdown, forceDropdown] = useToggle(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    )
      forceDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative md:hidden" ref={dropdownRef}>
      <a
        href="#!"
        onClick={handleDropdown}
        aria-label="Abrir menu de opções"
        className="px-2 rounded-md border border-zinc-400 hover:border-white text-zinc-400 hover:text-white"
      >
        <FontAwesomeIcon icon={faBars} width={14} height={14} />
      </a>

      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-52 bg-planejae rounded-md shadow-lg py-2 text-base">
          {MENU.map((item, idx) => (
            <Fragment key={`menu-mobile-${idx}`}>
              <Link
                href={item.href}
                className="flex items-center gap-2 py-2 px-3 hover:bg-slate-500 w-full"
              >
                <FontAwesomeIcon icon={item.icon} width={24} />
                <span>{item.label}</span>
              </Link>
              {idx + 1 < MENU.length && <hr className="mb-2 mt-2" />}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
