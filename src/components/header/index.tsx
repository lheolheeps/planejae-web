import { Indie_Flower } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "@types";

import { MENU } from "./constants";
import { MobileMenu } from "./mobile-menu";
import { Profile } from "./profile";

type HeaderProps = {
  user: User;
};

const indie = Indie_Flower({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export function Header({ user }: HeaderProps) {
  return (
    <>
      <div className="w-full py-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl">
            <MobileMenu />
            <Image src="/icon.png" alt="" width={32} height={32} />
            <span className={indie.className}>Planejaê</span>
          </div>
          <div className="flex items-center gap-4">
            <ul className="gap-4 hidden md:flex md:items-center">
              {MENU.map((item, idx) => (
                <li key={`menu-${idx}`} className="text-zinc-400">
                  <Link className={item.className} href={item.href}>
                    {item.showIconOnDesktop && (
                      <FontAwesomeIcon icon={item.icon} width={16} />
                    )}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Profile user={user} />
          </div>
        </div>
      </div>
      <hr className="border-zinc-400" />
    </>
  );
}
