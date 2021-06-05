import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const AddNoteComp = ({ newNote, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit} >
      <Form.Label>Add Note:</Form.Label>
      <br />
      <Form.Text> Please add your note here</Form.Text>
      <Form.Control
        value={newNote}
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
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  newNote: PropTypes.string.isRequired,
};
