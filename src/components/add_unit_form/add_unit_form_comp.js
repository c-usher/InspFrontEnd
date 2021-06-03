import React from "react";
import { Form, Jumbotron, Row, Col, Button } from "react-bootstrap";
import PropTypes from  "prop-types";
import './add_unit_form_style.css'

export const AddUnitForm = ({ handleOnSubmit, handleOnChange, formData }) => {
  return (
      <Jumbotron className="mt-3 add-new-unit bg-light">
          <h1 className="text-info text-center">Add A New Unit</h1>
          <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Unit Number
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="unitNumber"
              value={formData.unitNumber}
              onChange={handleOnChange}
              placeholder="Enter Unit Number"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Building Letter
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="buildingLetter"
              value={formData.buildingLetter}
              onChange={handleOnChange}
              placeholder="Enter Building ID"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label>Notes</Form.Label>
          <Col>
            <Form.Control
              as="textarea"
              name="notes"
              value={formData.notes}
              rows="5"
              placeholder="Enter Notes"
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="info" block sz="lg">
          Add Unit
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddUnitForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired
}
