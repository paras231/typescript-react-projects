import React from "react";

type FormProps = {
  onSubmit?: React.FormEventHandler;
  type?: string;
  keyType?: string;
  children: React.ReactNode;
  className: any;
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
      <form className={className.form} key={keyType} onSubmit={onSubmit}>
        {children}
      </form>
    </>
  );
};

export default FormWrapper;
