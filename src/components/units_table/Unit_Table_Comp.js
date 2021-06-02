import React from "react";
import { Table } from "react-bootstrap";

export const UnitTable = () => {
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
              <tr>
                  <td>007</td>
                  <td>A</td>
                  <td>True</td>
                  <td>False</td>
                  <td>False</td>
                  <td>0</td>
                  <td>False</td>
                  <td>This is a note!</td>
              </tr>
          </tbody>
    </Table>
  );
};
