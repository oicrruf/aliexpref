import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { config } from "../../config";
import { BsSearch } from "react-icons/bs";

import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";

const { logo } = config;
const categories = ["All Categories", "Electronic", "Fashion", "Gift"];

export const SearchBar = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    let list = categories.map((e, i) => (
      <option key={i} value={i}>
        {e}
      </option>
    ));
    setList(list);
  }, []);

  return (
    <React.Fragment>
      <div className="search-bar">
        <div className="container">
          <img src={logo} id="logo" className="img-fluid" />
          <div className="input-group">
            <input type="text" class="form-control" placeholder="Buscar" />
            <select
              className="px-3"
              name="categories"
              id="search-bar__categories"
            >
              {list}
            </select>
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="search"
            >
              <BsSearch />
            </button>
          </div>
          <div className="whishlist-and-shopping-bag">
            <a href="#">
              <FaRegHeart className="whishlist-and-shopping-bag__icon" />
            </a>
            <a href="#">
              <RiShoppingBagLine className="whishlist-and-shopping-bag__icon" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
