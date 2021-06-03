import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddUnitForm } from "../../components/add_unit_form/add_unit_form_comp";
import {
  unitNumCheck,
  buildingCheck,
  notesCheck,
} from "../../utils/validation";

const initialErrorStateForm = {
  unitNumber: false,
  buildingLetter: false,
  notes: false,
};

const initialStateForm = {
  unitNumber: "",
  buildingLetter: "",
  notes: "",
};
export const AddUnit = () => {
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormDataError(initialErrorStateForm);
    const unitValid = await unitNumCheck(formData.unitNumber);
    const buildingValid = await buildingCheck(formData.buildingLetter);
    const notesValid = await notesCheck(formData.notes);

    !unitValid &&
      setFormDataError({
        ...initialErrorStateForm,
        unitNumber: !unitValid,
      });
    !buildingValid &&
      setFormDataError({
        ...initialErrorStateForm,
        buildingLetter: !buildingValid,
      });
    !notesValid &&
      setFormDataError({
        ...initialErrorStateForm,
        notes: !notesValid,
      });
    console.log("Submit Received", formData);
  };
  const [formData, setFormData] = useState(initialStateForm);
  const [formDataError, setFormDataError] = useState(initialErrorStateForm);

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
          <AddUnitForm
            handleOnSubmit={handleOnSubmit}
            handleOnChange={handleOnChange}
            formDataError={formDataError}
            formData={formData}
          />
        </Col>
      </Row>
    </Container>
  );
};
