import React, { useState, useEffect } from "react";
import { Form, Jumbotron, Row, Col, Button } from "react-bootstrap";
// import PropTypes from "prop-types";
import "./add_unit_form_style.css";
import { unitNumCheck, notesCheck } from "../../utils/validation";

const initialErrorStateForm = {
  unitAddedBy: "",
  unitNum: "",
  cleanStatus: true,
  inHouseStatus: false,
  managedStatus: false,
  rentalStatus: false,
  note: "",
  noteAddedBy: "",
  noteStatus: false,
  prefAddedBy: "",
  pref: "",
};

const initialStateForm = {
  unitAddedBy: "",
  unitNum: "",
  cleanStatus: true,
  inHouseStatus: false,
  managedStatus: false,
  rentalStatus: false,
  note: "",
  noteAddedBy: "",
  noteStatus: false,
  prefAddedBy: "",
  pref: "",
};

export const AddUnitForm = () => {
  const [formData, setFormData] = useState(initialStateForm);
  const [formDataError, setFormDataError] = useState(initialErrorStateForm);
  useEffect(() => {}, [formData, formDataError]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormDataError(initialErrorStateForm);
    const unitValid = await unitNumCheck(formData.unitNum);
    const notesValid = await notesCheck(formData.notes);

    !unitValid &&
      setFormDataError({
        ...initialErrorStateForm,
        unitNum: !unitValid,
      });
    !notesValid &&
      setFormDataError({
        ...initialErrorStateForm,
        notes: !notesValid,
      });
    console.log("Submit Received", formData);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Jumbotron className="mt-3 add-new-unit bg-light">
      <h1 className="text-info text-center">Add A New Unit</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Unit:
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="unitNum"
              minLength="4"
              maxLength="4"
              value={formData.unitNum}
              onChange={handleOnChange}
              placeholder="Enter Unit Number"
              required
            />
            <Form.Text className="text-danger">
              {formDataError.unitNum &&
                "Unit number does not meet prerequisite!"}
            </Form.Text>
          </Col>
          {/* </Form.Group>
        <Form.Group as={Row}> */}
        </Form.Group>
        <br />
        <hr />
        <Form.Group as={Row}>
          <Form.Label>Notes:</Form.Label>
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

// AddUnitForm.propTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   formData: PropTypes.object.isRequired,
//   formDataError: PropTypes.object.isRequired,
// };

/*{
    "unitAddedBy": "Cody Usher",
    "unitNum" : "A901", -- 
    "cleanStatus": true, --
    "inHouseStatus": true, --
    "managedStatus": true, --
    "rentalStatus" : true, --
    "note": "this is a note",
    "noteAddedBy": "Cody Usher",
    "noteStatus": true,
    "prefAddedBy": "Cody Usher",
    "pref": "80 Degrees"
} */
