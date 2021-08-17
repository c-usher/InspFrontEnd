import { Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";

import { PasswordResetForm } from "../../components/password_reset/Password_Reset_Form";
import UpdatePasswordForm from "../../components/password_reset/Update_Password_Form";
import "./reset_password_style.css";

export const ResetPassPage = () => {
  const { needResetPin } = useSelector((state) => state.passReset);

  return (
    <div className="reset-page">
      <Jumbotron className="form-box">
        {needResetPin ? <PasswordResetForm /> : <UpdatePasswordForm />}
      </Jumbotron>
    </div>
  );
};
