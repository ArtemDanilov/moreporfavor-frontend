import Link from "next/link";

import "./style.scss";

type Props = {
  href: string;
  label: string;
  className?: string;
};

const Button = ({ href, label, className }: Props) => {
  return (
    <Link
      href={href}
      className={`button-transition max-w-max block py-3 px-15 bg-white shadow-small rounded-3xl ${className}`}
    >
      <span className="font-sans text-base font-bold text-green">{label}</span>
    </Link>
  );
};

export default Button;
