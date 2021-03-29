import React from "react";
import "./styles.css";

export const FormContainer = (props) => {
  return (
    <React.Fragment>
      <div id="form-container" className="row">
        {props.children}
      </div>
    </React.Fragment>
  );
};

export const SignUpForm = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-lg-12 row form-container__title">
          <h1>Crear nueva cuenta de usuario</h1>
        </div>
        <FormContainer>
          <div className="col-lg-6">
            <h3>Información personal</h3>

            <div className="form-group">
              <label for="firstName">
                Nombre <span>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                id="firstName"
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
              <label for="lastName">
                Apellido <span>*</span>
              </label>
              <input type="password" className="form-control" id="lastName" />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="newsletter"
              />
              <label className="form-check-label" for="newsletter">
                Sucribirme al Newsletter
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <h3>Información de registro</h3>

            <div className="form-group">
              <label for="email">
                Correo electrónico <span>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
              <label for="password">
                Contraseña <span>*</span>
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="form-group">
              <label for="confirmPassword">
                Confirmar contraseña <span>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
              />
            </div>
          </div>
          <div className="col-lg-12 mt-4">
            <button type="submit" className="btn btn-primary btn-auth">
              Crear mi cuenta
            </button>
          </div>
        </FormContainer>
      </div>
    </React.Fragment>
  );
};

export const LoginForm = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-lg-12 row form-container__title">
          <h1>Crear nueva cuenta de usuario</h1>
        </div>
        <FormContainer>
          <div className="col-lg-6">
            <h3>Usuarios registrados</h3>
            <p className="login-copy">
              Si tiene una cuenta, inicie sesión con su dirección de correo
              electrónico.
            </p>
            <div className="form-group">
              <label for="email">
                Correo electrónico <span>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
              <label for="password">
                Contraseña <span>*</span>
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary btn-auth mt-4">
              Crear mi cuenta
            </button>
          </div>
          <div className="col-lg-6">
            <h3>Información de registro</h3>
            <p className="why-register">
              Crear una cuenta tiene muchos beneficios: realice el pago más
              rápido, mantenga más de una dirección, realice un seguimiento de
              los pedidos y más.
            </p>
            <button type="submit" className="btn btn-primary btn-auth mt-4">
              Crear mi cuenta
            </button>
          </div>
        </FormContainer>
      </div>
    </React.Fragment>
  );
};
