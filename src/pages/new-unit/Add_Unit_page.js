import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddUnitForm } from "../../components/add_unit_form/add_unit_form_comp";

export const AddUnit = () => {
  return (
    <Container>
      <Row>
        <Col>
          <AddUnitForm />
        </Col>
      </Row>
    </Container>
  );
};
