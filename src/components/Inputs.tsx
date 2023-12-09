import React from "react";
type InputProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  keyType?: string;
  name?: string;
  type: string;
  className: string;
  placeholder: string;
  ref?:any;
};

export const CommonInputs = ({
  onChange,
  value,
  name,
  keyType,
  type,
  className,
  placeholder,
  ref
}: InputProps) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        key={keyType}
        ref={ref}
        className={className}
        placeholder={placeholder}
      />
    </>
  );
};
