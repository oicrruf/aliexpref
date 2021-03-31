import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../../../config";
import { auth } from "../../../utils";
import { Rating } from "../../atoms/Rating";
import "./styles.css";

const { appName, single_product, domain } = config;
export const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState();
  useEffect(() => {
    setIsAuthenticated(auth.isAuthenticated());
    axios
      .get(`${single_product + props.id}`)
      .then((r) => {
        r.status === 200 && setProduct(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  document.querySelector(
    "title"
  ).innerText = `${product.product_name} | ${appName}`;
  return (
    <React.Fragment>
      <div className="border-bottom">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Inicio</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product.product_name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="row product-detail">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src={
                product.image && product.image.includes(".")
                  ? product.image
                  : window.location.hostname != "oicrruf.github.io"
                  ? "/assets/img/product.jpg"
                  : `${domain}/assets/img/product.jpg`
              }
            />
          </div>
          <div className="col-lg-6">
            <h1>{product.product_name}</h1>
            <Rating />
            <p>{product.description}</p>
            <hr />
            <div className="stock-and-price">
              <div className="stock-and-price__price">
                <span>Desde:</span>
                <h4>{`$${product.price}.00`}</h4>
              </div>
              <div className="stock-and-price__stock">
                <span>
                  Disponibilidad:
                  {product.isActive ? " En stock" : " Agotado"}
                </span>
              </div>
            </div>
            {isAuthenticated ? (
              <Link
                to="/"
                type="submit"
                className="btn btn-primary btn-product 
							mt-4"
              >
                {" "}
                Añadir al carrito
              </Link>
            ) : (
              <Link
                to="/login"
                type="submit"
                className="btn btn-primary btn-product 
							mt-4"
              >
                {" "}
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};