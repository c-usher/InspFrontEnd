import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

export const NotesHistoryComp = ({ notes }) => {
  if (!notes) return null;
  return notes.map((row, i) => (
    <div className="note-history">
      <div key={i} className="unit-note">
        <div className="note-by">{row.noteBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="note">{row.note}</div>
      <hr />
    </div>
  ));
   
};

NotesHistoryComp.propTypes = {
  notes: PropTypes.array.isRequired,
};
