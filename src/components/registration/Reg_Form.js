import { DateRangeRounded, DragHandleSharp } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const initialState = {
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
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
  const [newUser, setNewUser] = useState(initialState);
  const [passErr, setPassErr] = useState(passVerifyErr);

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
  console.log(passErr);
  console.log(newUser);
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
          <Form>
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
          </Form>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default RegForm;
