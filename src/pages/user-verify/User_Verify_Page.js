import React, { useEffect, useState } from "react";
import "./user_verify_style.css";
import { Jumbotron, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { newUserVerify } from "../../api/userApi";

const initialResponse = {
  status: "",
  message: "",
};

export const UserVerifyPage = () => {
  const { _id, email } = useParams();
  const dt = { _id, email };

  const [response, setResponse] = useState(initialResponse);

  useEffect(() => {
    const apiCall = async () => {
      const result = await newUserVerify(dt);
      setResponse(result);
    };

    !response.status && apiCall();
  }, [response]);

  return (
    <div className="registration_page">
      <div className="mt-5">
        <Jumbotron className="form-box">
          {!response.status && <Spinner variant="info" animation="border" />}
          {response.status && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}
        </Jumbotron>
      </div>
    </div>
  );
};
