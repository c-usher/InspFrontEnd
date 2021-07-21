import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./notes_history_style.css";
import { Button, Alert } from "react-bootstrap";

export const NotesHistoryComp = ({ notes }) => {
  const { newNote } = useSelector((state) => state.units);
  console.log(newNote);

  if (!notes) return null;

  return notes.map((row, i) => (
    <div>
      <div>{newNote && <Alert variant="success">{newNote}</Alert>}</div>
      <div className="note-history mt-3" key={i}>
        <div className="unit-note ">
          <div className="note-by">{row.noteAddedBy}</div>
          <div className="date">{row.noteAddedAt}</div>
        </div>
        <div className="note">{row.note}</div>
        <div className="noteStatus">{row.noteStatus}</div>
        <Button variant="info">Remove Note</Button>
      </div>
    </div>
  ));
};

NotesHistoryComp.propTypes = {
  notes: PropTypes.array.isRequired,
};
