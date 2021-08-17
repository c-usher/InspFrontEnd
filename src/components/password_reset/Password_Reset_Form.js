import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export const PasswordResetForm = () => {
  const [email, setEmail] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setEmail(value);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Reset Password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>
              <Button type="submit" value="Submit">
                Reset Password
              </Button>
            </Form>
            <hr />
          </Col>
        </Row>
      </Container>
      <a href="/">Back To Log In</a>
    </div>
  );
};
