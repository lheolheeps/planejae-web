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
  mobileIconOnly?: boolean;
  onClick?: () => void;
};

export function Button({
  label,
  href,
  icon,
  rightIcon,
  full,
  bg,
  mobileIconOnly,
  onClick,
}: ButtonProps) {
  const className = `flex gap-2 items-center justify-center ${
    full ? "w-full" : ""
  } border-2 border-planejae text-zinc-200 rounded-md py-1 ${
    bg ? bg : "bg-planejae"
  } hover:bg-black hover:text-white ${
    mobileIconOnly ? "px-2 md:px-4" : "px-4"
  }`;

  const labelClassName = mobileIconOnly ? "hidden md:block" : "";

  const renderContent = () => {
    return (
      <>
        {icon && !rightIcon && <FontAwesomeIcon icon={icon} width={16} />}
        <span className={labelClassName}>{label}</span>
        {icon && rightIcon && <FontAwesomeIcon icon={icon} width={16} />}
      </>
    );
  };

  return (
    <>
      {href && (
        <Link href={href} onClick={onClick} className={className}>
          {renderContent()}
        </Link>
      )}
      {!href && onClick && (
        <button onClick={onClick} className={className}>
          {renderContent()}
        </button>
      )}
    </>
  );
}
