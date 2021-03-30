import React from "react";
import { LoginForm as Form } from "../../organisms/Auth";
import { MainTemplate } from "../../templates";

export const Login = () => {
  return (
    <React.Fragment>
      <MainTemplate title={"Iniciar sesión"}>
        <Form />
      </MainTemplate>
    </React.Fragment>
  );
};
