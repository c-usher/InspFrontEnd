import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const UnitTable = () => {
  const { units, isLoading, error } = useSelector((state) => state.units);

  if (isLoading) return <h3>Loading ...</h3>;
  if (error) return <h3>{error}</h3>;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Unit</th>
          <th>Managed</th>
          <th>Rental</th>
          <th>In House</th>
          <th>Robe Count</th>
          <th>Inspected</th>
        </tr>
      </thead>
      <tbody>
        {units.length ? (
          units.map((row) => (
            <tr key={row.id}>
              <td>
                <Link to={`/unit/${row.id}`}>{row.unitNum}</Link>
              </td>

              <td>{row.managed ? "Managed" : "Not Managed"}</td>
              <td>{row.rental ? "Rental" : "Not a Rental"}</td>
              <td>{row.inHouse ? "In House" : "Not In House"}</td>
              <td>{row.rental ? row.robeCount : "Not a Rental"}</td>
              <td>{row.inspected ? "Inspected" : "Not Inspected"}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No Units to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
