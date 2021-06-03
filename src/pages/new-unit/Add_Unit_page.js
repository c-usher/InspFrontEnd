import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddUnitForm } from "../../components/add_unit_form/add_unit_form_comp";

const initialStateForm = {
  unitNumber: "",
  buildingLetter: "",
  notes: "",
};
export const AddUnit = () => {
    const handleOnSubmit = e => {
        e.preventDefault();
        console.log("Submit Received", formData);
  }
  const [formData, setFormData] = useState(initialStateForm);

    const handleOnChange = (e) => {
       
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <AddUnitForm handleOnSubmit={handleOnSubmit}  handleOnChange={handleOnChange} formData={formData} />
        </Col>
      </Row>
    </Container>
  );
};
