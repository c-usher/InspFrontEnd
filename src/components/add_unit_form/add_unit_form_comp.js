import React from "react";
import { Form, Jumbotron, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add_unit_form_style.css";

export const AddUnitForm = ({
  handleOnSubmit,
  handleOnChange,
  formData,
  formDataError,
}) => {
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
              minLength="3"
              maxLength="3"
              value={formData.unitNumber}
              onChange={handleOnChange}
              placeholder="Enter Unit Number"
              required
            />
            <Form.Text className="text-danger">
              {formDataError.unitNumber &&
                "Unit number does not meet prerequisite!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Building Letter
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="buildingLetter"
              minLength="1"
              maxLength="1"
              value={formData.buildingLetter}
              onChange={handleOnChange}
              placeholder="Enter Building ID"
              required
            />
            <Form.Text className="text-danger">
              {formDataError.buildingLetter &&
                "Building Letter does not meet prerequisite!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label>Notes</Form.Label>
          <Col>
            <Form.Control
              as="textarea"
              name="notes"
              minLength="1"
              maxLength="300"
              value={formData.notes}
              rows="5"
              placeholder="Enter Notes"
              onChange={handleOnChange}
              required
            />
            <Form.Text className="text-danger">
              {formDataError.notes && "Notes do not meet prerequisite!"}
            </Form.Text>
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
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired,
};
