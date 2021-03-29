import React from "react";
import { Footer, HeaderTop, SearchBar } from "../../";
import { SignUpForm as Form } from "../../organisms/Auth";

export const SignUp = () => {
  return (
    <React.Fragment>
      <HeaderTop />
      <SearchBar />
      <Form />
      <Footer />
    </React.Fragment>
  );
};
