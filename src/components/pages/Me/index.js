import React from "react";
import { UserInfo } from "../../organisms";
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
