import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { updatePassword } from "./passwordAction";

const initialState = {
  pin: "",
  password: "12345678Aa#",
  confirmPassword: "12345678Aa#",
};

const passVerifyErr = {
  correctLength: false,
  hasUpper: false,
  hasLower: false,
  hasNumber: false,
  hasSpecial: false,
  confirmPassword: false,
};

const UpdatePasswordForm = () => {
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState(initialState);
  const [passErr, setPassErr] = useState(passVerifyErr);

  const { isLoading, status, message, email } = useSelector(
    (state) => state.passReset
  );

  useEffect(() => {}, [newPassword]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewPassword({ ...newPassword, [name]: value });

    if (name === "password") {
      const correctLength = value.length > 7;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpecial = /[!,@,#,$,%,&]/.test(value);

      setPassErr({
        ...passErr,
        correctLength,
        hasUpper,
        hasLower,
        hasNumber,
        hasSpecial,
      });
    }
    if (name === "confirmPassword") {
      setPassErr({
        ...passErr,
        confirmPassword: newPassword.password === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { pin, password } = newPassword;
    const updatedPass = {
      email,
      pin,
      newPassword: password,
    };
    dispatch(updatePassword(updatedPass));
    console.log(pin, password);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Update Your Password</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Reset Pin</Form.Label>
              <Form.Control
                type="number"
                name="pin"
                value={newPassword.pin}
                onChange={handleOnChange}
                placeholder="Reset Pin"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newPassword.password}
                onChange={handleOnChange}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={newPassword.confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Form.Text>
              {!passErr.confirmPassword && (
                <div className="text-danger mb-3">Passwords do not match!</div>
              )}
            </Form.Text>
            <ul className="py-4">
              {!passErr.correctLength && (
                <li className={"text-danger"}>
                  Password needs to be at least 7 characters long!
                </li>
              )}
              {!passErr.hasUpper && (
                <li className="text-danger">
                  Password needs at least one uppercase letter!
                </li>
              )}
              {!passErr.hasLower && (
                <li className="text-danger">
                  Password needs at least one lowercase letter!
                </li>
              )}
              {!passErr.hasNumber && (
                <li className="text-danger">
                  Password needs at least one number!
                </li>
              )}
              {!passErr.hasSpecial && (
                <li className="text-danger">
                  Password needs at least one special character!
                </li>
              )}
            </ul>
            <Button
              variant="primary"
              type="submit"
              disabled={Object.values(passErr).includes(false)}
            >
              Submit
            </Button>
            {isLoading && <Spinner variant="info" animation="border" />}
          </Form>
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          <a href="/">Back to Login</a>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdatePasswordForm;
