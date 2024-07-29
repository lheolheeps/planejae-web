import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCrown,
  faLocationDot,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

type Menu = {
  label: string;
  href: string;
  icon: IconProp;
  className?: string;
  showIconOnDesktop?: boolean;
};

export const MENU: Menu[] = [
  {
    label: "VIAGENS",
    href: "/viagens/",
    icon: faLocationDot,
    className: "hover:text-white",
  },
  {
    label: "CONVITES",
    href: "/viagens/convites/",
    icon: faUserPlus,
    className: "hover:text-white",
  },
  {
    label: "ASSINAR PREMIUM",
    href: "https://google.com",
    icon: faCrown,
    showIconOnDesktop: true,
    className:
      "flex gap-2 items-center border-2 border-zinc-500 text-zinc-200 rounded-md py-1 px-4 bg-planejae hover:bg-black hover:text-white hover:border-planejae text-sm",
  },
];
