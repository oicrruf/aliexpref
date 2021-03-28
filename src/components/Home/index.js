import React, { useEffect, useState } from "react";
import { AiOutlineCar, AiOutlineTool } from "react-icons/ai";
import { CgGames } from "react-icons/cg";
import { FiMusic, FiShoppingCart } from "react-icons/fi";
import { MdChildCare } from "react-icons/md";
import { RiComputerLine, RiHome3Line } from "react-icons/ri";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { Header } from "../Header";
import "./styles.css";
import axios from "axios";
import { config } from "../../config";
import { unique } from "../../utils";
import { Footer } from "../";
const { products } = config;

export const Categories = () => {
  const popularCategories = [
    {
      id: "automotive",
      name: "Automotive",
      icon: <AiOutlineCar className="category-box__icon" />,
    },
    {
      id: "computers",
      name: "Computers",
      icon: <RiComputerLine className="category-box__icon" />,
    },
    {
      id: "games",
      name: "Games",
      icon: <CgGames className="category-box__icon" />,
    },
    {
      id: "grocery",
      name: "Grocery",
      icon: <FiShoppingCart className="category-box__icon" />,
    },
    {
      id: "home",
      name: "Home",
      icon: <RiHome3Line className="category-box__icon" />,
    },
    {
      id: "kids",
      name: "Kids",
      icon: <MdChildCare className="category-box__icon" />,
    },
    {
      id: "music",
      name: "Music",
      icon: <FiMusic className="category-box__icon" />,
    },

    {
      id: "tools",
      name: "Tools",
      icon: <AiOutlineTool className="category-box__icon" />,
    },
  ];
  const categoriesBox = popularCategories.map((b, i) => {
    return (
      <div key={i} className="category-box">
        <a href={`#${b.id}`}>
          {b.icon}
          <h5>{b.name}</h5>
        </a>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="categories__container">
        <div className="container">{categoriesBox}</div>
      </div>
    </React.Fragment>
  );
};

export const AllProducts = (props) => {
  const [list, setList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(products)
      .then((r) => {
        let data = r.data;
        setAllProducts(data);
        let categoriesList = [];
        data.map((c) => {
          c.category != undefined && categoriesList.push(c.category);
        });
        setCategories(categoriesList.filter(unique).sort());
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    let list = categories.map((e, i) => (
      <div key={i} id={e.toLowerCase()} className="py-5 product-categoty__box">
        <div className="container">
          <h5 className="mb-0">{e}</h5>
          <hr />
          <div className="products-by-category">
            {allProducts.map((p, i) => {
              if (p.category == e) {
                return (
                  <div key={i} className="single-product" id={p._id}>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src={
                          p.image && p.image.includes(".")
                            ? p.image
                            : "./assets/img/product.jpg"
                        }
                      />
                    </a>
                    <a href="#">
                      <h6>{p.product_name}</h6>
                    </a>
                    <div className="product-rating">
                      <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <FaRegHeart />
                    </div>
                    <h4>{p.price != undefined ? `$${p.price}.00` : `$0.00`}</h4>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    ));
    setList(list);
  }, [categories]);
  return (
    <React.Fragment>
      <div className="products__container">{list}</div>
    </React.Fragment>
  );
};

export const Home = (props) => {
  return (
    <React.Fragment>
      <div className="home__container">
        <Header>
          <div className="container">{props.children}</div>
        </Header>
        <Categories />
        <AllProducts />
        <Footer />
      </div>
    </React.Fragment>
  );
};
