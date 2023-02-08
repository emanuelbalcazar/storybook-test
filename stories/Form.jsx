import React from "react";
import { Button } from "./Button";
import PropTypes from 'prop-types';
import "./Form.css";

/**
 * Form example for Claro Com
 */
export const Form = ({
  placeholder = "",
  ...props
}) => {
  const [details, setDetails] = React.useState(false);

  const onClick = () => {
    setDetails(true);
  };

  return (
    <div className="form-wrapper">
      <input
        autoComplete="off"
        placeholder="Ingresa tu email"
        className={"storybook-input"}
        name="email"
        aria-label="email"
        id="email"
        data-testid="email"
        {...props}
      />
      <input
        autoComplete="off"
        placeholder="Ingresa tu contraseña"
        className={"storybook-input"}
        name="password"
        id="password"
        data-testid="password"
        {...props}
      />
      <Button label="Siguiente" className="button" onClick={() => onClick()} />
      {details === true ? (
        <p>
          Bienvenido al storybook
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

Form.propTypes = {
  /**
   * Text input
   */
  placeholder: PropTypes.string
};

Button.defaultProps = {
  placeholder: ''
};