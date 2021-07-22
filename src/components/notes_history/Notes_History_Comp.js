import React from "react";
import PropTypes from "prop-types";
import "./notes_history_style.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { noteStatusUpdate } from "../../pages/show_units/unitsAction";

export const NotesHistoryComp = ({ notes }) => {
  const uId = 0;
  const dispatch = useDispatch();
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
      <Button
        variant="outline-info"
        onClick={() => dispatch(noteStatusUpdate(uId))}
      >
        Remove Note
      </Button>
    </div>
  ));
};

NotesHistoryComp.propTypes = {
  notes: PropTypes.array.isRequired,
};
