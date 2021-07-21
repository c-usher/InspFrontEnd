import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addNewNote } from "../../pages/show_units/unitsAction";
import PropTypes from "prop-types";

export const AddNoteComp = ({ _id }) => {
  const dispatch = useDispatch();
  const {
    user: { name },
  } = useSelector((state) => state.user);
  const [note, setNote] = useState("");
  const handleOnChange = (e) => {
    setNote(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const noteObj = {
      note,
      noteAddedBy: name,
    };

    dispatch(addNewNote(_id, noteObj));
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Add Note:</Form.Label>
      <br />
      <Form.Text> Please add your note here</Form.Text>
      <Form.Control
        value={note}
        onChange={handleOnChange}
        as="textarea"
        row="5"
        name="detail"
      />
      <div className="mt-1">
        <Button variant="info" type="submit">
          Add Note
        </Button>
      </div>
    </Form>
  );
};

AddNoteComp.prototype = {
  _id: PropTypes.string.isRequired,
};
