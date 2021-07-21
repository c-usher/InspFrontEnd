import React from "react";
import PropTypes from "prop-types";
import "./notes_history_style.css";
import { Button } from "react-bootstrap";

export const NotesHistoryComp = ({ notes }) => {
  if (!notes) return null;

  return notes.map((row, i) => (
    <div className="note-history mt-3" key={i}>
      <div className="unit-note ">
        <div className="note-by">{row.noteAddedBy}</div>
        <div className="date">
          {row.noteAddedAt && new Date(row.noteAddedAt).toLocaleString()}
        </div>
      </div>
      <div className="note">{row.note}</div>
      <div className="noteStatus">{row.noteStatus}</div>
      <Button variant="info">Remove Note</Button>
    </div>
  ));
};

NotesHistoryComp.propTypes = {
  notes: PropTypes.array.isRequired,
};
