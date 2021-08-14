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
import { createNewUser } from "./newUserAction";

const initialState = {
  name: "Cody Test",
  phone: "1231231234",
  email: "test1@test.com",
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

const RegForm = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(initialState);
  const [passErr, setPassErr] = useState(passVerifyErr);

  const { isLoading, status, message } = useSelector((state) => state.newUser);

  useEffect(() => {}, [newUser]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });

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
        confirmPassword: newUser.password === value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, password } = newUser;
    const newUserReg = {
      name,
      phone,
      email,
      password,
    };
    dispatch(createNewUser(newUserReg));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>User Registration</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {message && (
            <Alert variant={status === "Success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleOnChange}
                placeholder="Full Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={newUser.phone}
                onChange={handleOnChange}
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleOnChange}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleOnChange}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={newUser.confirmPassword}
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

export default RegForm;
