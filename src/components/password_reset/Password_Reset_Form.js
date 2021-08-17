import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Alert,
  Spinner,
} from "react-bootstrap";
import { sendPassResetEmail } from "./passwordAction";

export const PasswordResetForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { isLoading, status, message } = useSelector(
    (state) => state.passReset
  );

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(sendPassResetEmail(email));
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-info text-center">Reset Password</h1>
            <hr />
            {message && (
              <Alert variant={status === "success" ? "success" : "danger"}>
                {message}
              </Alert>
            )}

            {isLoading && <Spinner variant="primary" animation="border" />}
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
