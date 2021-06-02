import React from "react";
import { Table } from "react-bootstrap";

export const UnitTable = ({units}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Unit Number</th>
          <th>Building</th>
          <th>Managed</th>
          <th>Rental</th>
          <th>In House</th>
          <th>Robe Count</th>
          <th>Inspected</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {units.length &&
          units.map((row) => (
            <tr>
                  <td>{row.id}</td>
                  <td>{row.status}</td>
                  <td>{row.addedAt}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
