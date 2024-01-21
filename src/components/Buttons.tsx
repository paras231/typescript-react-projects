import React, { useState } from "react";
import { useMyName, useKeyPress } from "../customHooks";

type buttonProps = {
  title: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className: string;
  variant: "primary" | "secondary";
};

export const CommonButton = ({
  title,
  onClick,
  className,
  type,
}: buttonProps) => {
  return (
    <>
      <button onClick={onClick} className={className} type={type}>
        {title}
      </button>
    </>
  );
};

interface Variantprops {
  type: "submit" | "button" | "reset";
  title: String;
  clickHander?: React.MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "secondary" | "custom";
  customClass?: string;
}

export const ButtonWithVariants = ({
  type,
  title,
  clickHander,
  variant,
  customClass,
}: Variantprops) => {
  // const [customClass,setCustomClass] = useState<String>("");

  const classnames = {
    primary: "bg-blue-400 rounded-md cursor-pointer border-none outline-none text-white p-2 hover:bg-indigo-500 transition ease-in-out delay-150 hover:scale-110 hover:font-semibold",
    secondary: "bg-red-400 rounded-md cursor-pointer border-none outline-none",
  };

  const applyClass =
    variant === "primary"
      ? classnames.primary
      : variant === "secondary"
      ? classnames.secondary
      : customClass;

  return (
    <>
      <button onClick={clickHander} type={type} className={applyClass}>
        {title}
      </button>
    </>
  );
};
