import React from "react";

export const useMyName = () => {
  const name = "Paras";
  return { name };
};

// use key press hook->

export const useKeyPress = (targetKey: any) => {
  const [keyPressed, setKeyPressed] = React.useState(false);

  const downHandler = (key: any) => {
    if (key === targetKey) setKeyPressed(true);
  };
  const upHandler = (key: any) => {
    if (key === targetKey) setKeyPressed(false);
  };
  React.useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  return keyPressed;
};
