import { useState, useEffect } from "react";

type functionProps = {
  count: number;
};

const Functions = ({ count }: functionProps) => {
  const user = {
    status: "online",
    username: "Shivam",
  };

  function userExist(user: any) {
    if (user.status === "online") {
      console.log("user is online");
    } else {
      console.log("user not found");
    }
  }
  useEffect(() => {
    userExist(user);
  }, [user]);

  useEffect(() => {
    console.log("effect is running");
    return () => {
      console.log("unmounting");
    };
  }, [count]);

  // iife-> immedieately invoked function
  //   (function () {
  //     userExist(user);
  //   })();

  const [strArray, setStrArray] = useState([""]);

  // create a function->

  function doTask(str: string) {
    let result = str.split(",");
    setStrArray(result);
  }   
  
  return <></>;
};

export default Functions;
