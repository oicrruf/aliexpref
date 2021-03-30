import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../../../config";
import "./styles.css";
import moment from "moment";
import "moment/locale/es";

const { me } = config;

export const UserInfo = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(me, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          Authorization: `JWT ${localStorage.getItem("@session")}`,
        },
      })
      .then((r) => {
        setUser(r.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="container user-container ">
        <div className="row ">
          <div className="offset-lg-2 col-lg-4">
            <img className="float-right" src="./assets/img/avatar.png" />
          </div>
          <div className="col-lg-6">
            <div className="user-info">
              <h1 className="mb-4">{`${user.first_name} ${user.last_name}`}</h1>
              <p className="mb-2">ID: {user._id}</p>
              <p className="mb-2">Correo electrónico: {user.email}</p>
              <p className="mb-2">
                Última actualización: {moment(user.updatedAt).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
