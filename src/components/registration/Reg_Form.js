import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const RegForm = () => {
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
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

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
