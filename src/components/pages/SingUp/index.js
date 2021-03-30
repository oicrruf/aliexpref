import React from "react";
import { SingUpForm as Form } from "../../organisms/Auth";
import { MainTemplate } from "../../templates";

export const SingUp = () => {
  return (
    <React.Fragment>
      <MainTemplate title={"Registrarme"}>
        <Form />
      </MainTemplate>
    </React.Fragment>
  );
};
