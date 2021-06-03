import React from "react";
import { Form, Jumbotron, Row, Col, Button } from "react-bootstrap";
import PropTypes from  "prop-types";


export const AddUnitForm = ({ handleOnSubmit, handleOnChange, formData }) => {
  return (
    <Jumbotron>
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
        <Button type="submit" variant="info" block>
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
