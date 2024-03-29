import React from "react";
import "./reg_style.css";

import { Jumbotron } from "react-bootstrap";
import RegForm from "../../components/registration/Reg_Form";

export const RegPage = () => {
  return (
    <div className="registration_page">
      <div className="mt-5">
        <Jumbotron className="form-box">
          <RegForm />
        </Jumbotron>
      </div>
    </div>
  );
};
