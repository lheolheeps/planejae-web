import Link from "next/link";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
  label: string;
  icon?: IconProp;
  rightIcon?: boolean;
  full?: boolean;
  bg?: string;
  href?: string;
  onClick?: () => void;
};

export function Button({
  label,
  href,
  icon,
  rightIcon,
  full,
  bg,
  onClick,
}: ButtonProps) {
  const className = `flex gap-2 items-center justify-center ${
    full ? "w-full" : ""
  } border-2 border-zinc-500 text-zinc-200 rounded-md py-1 px-4 ${
    bg ? bg : "bg-planejae"
  } hover:bg-black hover:text-white hover:border-planejae`;

  return (
    <>
      {href && (
        <Link href={href} onClick={onClick} className={className}>
          {icon && !rightIcon && <FontAwesomeIcon icon={icon} width={16} />}
          {label}
          {icon && rightIcon && <FontAwesomeIcon icon={icon} width={16} />}
        </Link>
      )}
      {!href && onClick && (
        <button onClick={onClick} className={className}>
          {icon && !rightIcon && <FontAwesomeIcon icon={icon} width={16} />}
          {label}
          {icon && rightIcon && <FontAwesomeIcon icon={icon} width={16} />}
        </button>
      )}
    </>
  );
}
