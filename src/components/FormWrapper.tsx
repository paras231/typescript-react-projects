import React from "react";

type FormProps = {
  onSubmit?: React.FormEventHandler;
  type?: string;
  keyType?: string;
  children: React.ReactNode;
  className: string;
};

const FormWrapper = ({
  onSubmit,
  type,
  keyType,
  children,
  className,
}: FormProps) => {
  return (
    <>
      <form className={className} key={keyType} onSubmit={onSubmit}>
        {children}
      </form>
    </>
  );
};

export default FormWrapper;
