import React from "react";
import { useMyName, useKeyPress } from "../customHooks";

type buttonProps = {
  title: String;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?:"button"|"submit"|"reset";
  className:string;
};

export const CommonButton = ({ title,  onClick,className,type }: buttonProps) => {
  

  return (
    <>
      <button onClick={onClick} className={className} type={type} >{title}</button>
     
    </>
  );
};
