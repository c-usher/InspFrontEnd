import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Jumbotron,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import "./add_unit_form_style.css";
import { unitNumCheck, notesCheck } from "../../utils/validation";
import { createNewUnit } from "./addUnitAction";

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
  const dispatch = useDispatch();
  const {
    user: { name },
  } = useSelector((state) => state.user);
  const { isLoading, error, successMsg } = useSelector(
    (state) => state.newUnit
  );
  const [formData, setFormData] = useState(initialStateForm);
  const [formDataError, setFormDataError] = useState(initialErrorStateForm);
  useEffect(() => {}, [formData, formDataError]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormDataError(initialErrorStateForm);
    const unitValid = await unitNumCheck(formData.unitNum);
    const notesValid = await notesCheck(formData.note);
    const prefValid = await notesCheck(formData.pref);

    !unitValid &&
      setFormDataError({
        ...initialErrorStateForm,
        unitNum: !unitValid,
      });
    !notesValid &&
      setFormDataError({
        ...initialErrorStateForm,
        note: !notesValid,
      });

    !prefValid &&
      setFormDataError({
        ...initialErrorStateForm,
        pref: !prefValid,
      });

    dispatch(
      createNewUnit({
        ...formData,
        unitAddedBy: name,
        noteAddedBy: name,
        prefAddedBy: name,
      })
    );
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleManagedChecked = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        rentalStatus: true,
      });
    } else {
      setFormData({
        ...formData,
        rentalStatus: false,
      });
    }
  };

  const handleRentalChecked = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        managedStatus: true,
      });
    } else {
      setFormData({
        ...formData,
        managedStatus: false,
      });
    }
  };

  return (
    <Jumbotron className="mt-3 add-new-unit bg-light">
      <h1 className="text-info text-center">Add A New Unit</h1>
      <hr />
      <div>{error && <Alert variant="danger">{error}</Alert>}</div>
      <div>{successMsg && <Alert variant="primary">{successMsg}</Alert>}</div>
      <div>{isLoading && <Spinner variant="primary" animation="border" />}</div>

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
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <div>Unit managed by Inspection Company</div>
          <input type="checkbox" onChange={handleManagedChecked} />
          <br />
          <div>Unit in rental program</div>
          <input type="checkbox" onChange={handleRentalChecked} />
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Col>
            <Form.Label>Notes:</Form.Label>
            <Form.Control
              as="textarea"
              name="note"
              minLength="1"
              maxLength="300"
              value={formData.note}
              rows="5"
              placeholder="Enter Notes"
              onChange={handleOnChange}
            />
            <Form.Text className="text-danger">
              {formDataError.note && "Notes do not meet prerequisite!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Col>
            <Form.Label>Preferences:</Form.Label>
            <Form.Control
              as="textarea"
              name="pref"
              minLength="1"
              maxLength="300"
              value={formData.pref}
              rows="5"
              placeholder="Enter Preferences"
              onChange={handleOnChange}
            />
            <Form.Text className="text-danger">
              {formDataError.note && "Preference do not meet prerequisite!"}
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
