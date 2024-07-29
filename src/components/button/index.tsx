import Link from "next/link";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
  label: string;
  icon?: IconProp;
  href?: string;
  onClick?: () => void;
};

export function Button({ label, href, icon, onClick }: ButtonProps) {
  const className =
    "flex gap-2 items-center border-2 border-zinc-500 text-zinc-200 rounded-md py-1 px-4 bg-planejae hover:bg-black hover:text-white hover:border-planejae";

  return (
    <>
      {href && (
        <Link href={href} onClick={onClick} className={className}>
          {icon && <FontAwesomeIcon icon={icon} width={16} />}
          {label}
        </Link>
      )}
      {!href && onClick && (
        <button onClick={onClick} className={className}>
          {icon && <FontAwesomeIcon icon={icon} width={16} />}
          {label}
        </button>
      )}
    </>
  );
}
