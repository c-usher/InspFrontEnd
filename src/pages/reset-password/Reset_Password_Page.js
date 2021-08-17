import { Jumbotron } from "react-bootstrap";
import { PasswordResetForm } from "../../components/password_reset/Password_Reset_Form";
import "./reset_password_style.css";

export const ResetPassPage = () => {
  return (
    <div className="reset-page">
      <Jumbotron className="form-box">
        <PasswordResetForm />
      </Jumbotron>
    </div>
  );
};
