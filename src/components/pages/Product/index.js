import React from "react";
import { Footer, HeaderTop, SearchBar } from "../../";
import { ProductDetail } from "../../organisms/ProductDetail";
export const Product = (props) => {
  const { id } = props.match.params;
  return (
    <React.Fragment>
      <HeaderTop />
      <SearchBar />
      <ProductDetail id={id} />
      <Footer />
    </React.Fragment>
  );
};
