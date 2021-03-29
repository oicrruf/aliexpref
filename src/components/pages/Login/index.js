import React from "react";
import { Footer, HeaderTop, SearchBar } from "../../";
import { LoginForm as Form } from "../../organisms/Auth";

export const Login = () => {
  return (
    <React.Fragment>
      <HeaderTop />
      <SearchBar />
      <Form />
      <Footer />
    </React.Fragment>
  );
};
