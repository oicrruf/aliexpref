import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { config } from "../../config";
import { country } from "../../data";
import { Dropdown } from "../Dropdown";
import "./styles.css";

const { appName, logo } = config;

export const HeaderTop = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  useEffect(() => {
    let countries = [];
    let currency = [];
    country.map((c) => {
      countries.push({ value: c.name, flag: c.flag });
      currency.push({ value: c.currency, symbol: c.symbol });
    });
    setCountriesList(countries);
    setCurrencyList(currency);
  }, []);
  return (
    <React.Fragment>
      <div className="navbar__header">
        <div className="container">
          <div className="navbar__header-international">
            <Dropdown name={"Moneda"} type={"currency"} data={currencyList} />
            <Dropdown name={"País"} type={"country"} data={countriesList} />
          </div>
          <div className="navbar__header-nav">
            <a href="#">Bienvenido a {appName}</a>|<a href="#">Contáctanos</a>|
            <a href="#">Iniciar Sesión</a>|<a href="#">Crear cuenta</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
