import InventoryGridList from "./components/Inventory_Components/InventoryGridList";
import { useState,useRef } from "react";
import { CommonButton } from "./components/Buttons";
import { CommonInputs } from "./components/Inputs";
function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
  });
  const changeHandler = (val:string, e?: React.ChangeEvent<HTMLInputElement>) => {
    // setFormState({ ...formState, [e.target.name]: e.target.value });
   if(inputRef.current){
    inputRef.current = val;
   }
  };  
  console.log(formState);
  
// let's change input with useRef hook-:


  return (
    <>
      {/* <InventoryGridList /> */}
      <form className="flex justify-center gap-40 items-center mt-40">
        <CommonInputs
          placeholder="type your name"
          type="text"
          name="userName"
          ref={inputRef}
          value={inputRef.current?.value}
          // onChange={changeHandler}
          className="bg-gray-700 p-2 rounded-md text-white placeholder:text-white pl-8"
        />
        <CommonInputs
          placeholder="Type email"
          type="email"
          name="email"
          ref={inputRef}
          // value={inputRef.current?.value}
          // onChange={changeHandler}
          className="bg-blue-400 p-2 text-white placeholder:text-white  rounded-md pl-4"
        />
        <CommonButton title={"Submit"} className="bg-red-700 border-none outline-none rounded-md p-2 text-white"/>
      </form>
    </>
  );
}

export default App;
