import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const initialState = {
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegForm = () => {
  const [newUser, setNewUser] = useState(initialState);
  useEffect(() => {}, [newUser]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
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
            <ul className="py-4">
              <li className="text-danger">
                Password needs to be at least 7 characters long!
              </li>
              <li className="text-danger">
                Password needs at least one uppercase letter!
              </li>
              <li className="text-danger">
                Password needs at least one lowercase letter!
              </li>
              <li className="text-danger">
                Password needs at least one number!
              </li>
              <li className="text-danger">
                Password needs at least one special character!
              </li>
            </ul>
            <Button variant="primary" type="submit">
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
