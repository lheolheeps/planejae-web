"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef } from "react";

import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToggle } from "@hooks";

type EllipsisButtonProps = {
  accessibleText: string;
  options: {
    label: string;
    href?: string;
    onClick?: () => void;
  }[];
};

export function EllipsisButton({
  accessibleText,
  options,
}: EllipsisButtonProps) {
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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleDropdown}
        aria-label={accessibleText}
        className="text-zinc-500 hover:text-white rounded-full px-1 border border-zinc-900 hover:border-white"
      >
        <FontAwesomeIcon icon={faEllipsisH} width={16} />
      </button>

      {isDropdownOpen && (
        <div className="absolute z-10 right-0 w-80 bg-zinc-900 rounded-md shadow-lg py-2 text-base border border-zinc-500">
          {options.map((item, idx) => (
            <Fragment key={`menu-mobile-${idx}`}>
              {item.href && (
                <Link
                  href={item.href}
                  onClick={item.onClick}
                  className="flex items-center gap-2 py-2 px-3 hover:bg-planejae w-full"
                >
                  <span>{item.label}</span>
                </Link>
              )}
              {!item.href && item.onClick && (
                <button
                  onClick={item.onClick}
                  className="flex items-center gap-2 py-2 px-3 hover:bg-planejae w-full"
                >
                  <span>{item.label}</span>
                </button>
              )}
              {idx + 1 < options.length && (
                <hr className="mb-2 mt-2 border-zinc-500" />
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
