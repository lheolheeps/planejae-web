import { Indie_Flower } from "next/font/google";
import Image from "next/image";

import { User } from "@types";

import { Menu } from "./menu";
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
            <Menu />
            <Profile user={user} />
          </div>
        </div>
      </div>
      <hr className="border-zinc-500" />
    </>
  );
}
