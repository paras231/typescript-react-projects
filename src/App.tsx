import InventoryGridList from "./components/Inventory_Components/InventoryGridList";
import { useState } from "react";
import FormWrapper from "./components/FormWrapper";
import { CommonButton } from "./components/Buttons";
import { CommonInputs } from "./components/Inputs";
function App() {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  function formSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    console.log("formSubmitHandler");
  }

  function sbmtHandler2(e: React.FormEvent) {
    e.preventDefault();
    console.log("formSubmitHandler  2");
  }

  return (
    <>
      {/* <InventoryGridList /> */}
      <FormWrapper
        key="form_1"
        onSubmit={formSubmitHandler}
        className="flex justify-center gap-40 items-center mt-40"
      >
        <CommonInputs
          placeholder="type your name"
          type="text"
          name="userName"
          value={formState.userName}
          onChange={changeHandler}
          className="bg-gray-700 p-2 rounded-md text-white placeholder:text-white pl-8"
        />
        <CommonInputs
          placeholder="Type email"
          type="email"
          name="email"
          value={formState.email}
          onChange={changeHandler}
          className="bg-blue-400 p-2 text-white placeholder:text-white  rounded-md pl-4"
        />
        <CommonButton
          title={"Submit"}
          className="bg-red-700 border-none outline-none rounded-md p-2 text-white"
        />
      </FormWrapper>

      <div>
        <FormWrapper
          onSubmit={sbmtHandler2}
          key="form_2"
          className="bg-red-700"
        >
          <CommonInputs
            type="radio"
            className="bg-blue-400"
            placeholder="Product Name"
          />
          <CommonButton
            className="bg-red-100"
            title={"Submit details"}
            type="submit"
          />
        </FormWrapper>
      </div>
    </>
  );
}

export default App;
