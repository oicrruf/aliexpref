import React from "react";
import { UserInfo, EditUser } from "../../organisms";
import { MainTemplate } from "../../templates";

export const Me = (props) => {
  return (
    <React.Fragment>
      <MainTemplate title={"Perfil"}>
        <UserInfo />
      </MainTemplate>
    </React.Fragment>
  );
};

export const EditMe = (props) => {
  return (
    <React.Fragment>
      <MainTemplate title={"Editar usuario"}>
        <EditUser />
      </MainTemplate>
    </React.Fragment>
  );
};
