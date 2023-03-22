import React from "react";
import { useMyName, useKeyPress } from "../customHooks";

type buttonProps = {
  title: String;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color?: String;
};

export const CommonButton = ({ title, color, onClick }: buttonProps) => {
  const { name } = useMyName();
  const pressed = useKeyPress("w");

  return (
    <>
      <button>{name}</button>
      {pressed && <span>p pressed</span>}
    </>
  );
};
