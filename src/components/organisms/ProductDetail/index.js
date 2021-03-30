import React, { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../../config";
import { Link } from "react-router-dom";
import { Rating } from "../../atoms/Rating";
import "./styles.css";
import { auth } from "../../../utils";

const { single_product } = config;
export const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(
    auth.isAuthenticated()
  );
  useEffect(() => {
    axios
      .get(`${single_product + props.id}`)
      .then((r) => {
        r.status === 200 && setProduct(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
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
                  : "/assets/img/product.jpg"
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
