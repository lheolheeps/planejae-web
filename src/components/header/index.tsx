import { Indie_Flower } from "next/font/google";
import Image from "next/image";

import { Profile } from "@components";
import { User } from "@types";

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
      <div className="w-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-4xl">
            <Image src="/icon.png" alt="" width={40} height={40} />
            <span className={indie.className}>Planejaê</span>
          </div>
          <Profile user={user} />
        </div>
      </div>
      <hr />
    </>
  );
}
