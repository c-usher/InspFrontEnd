import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import propTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import { userLogin } from "../../api/userApi";

// TODO: -----> STYLE THIS PAGE <------
export const LoginForm = ({ formSwitch }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Enter All Info Please");
    }
    dispatch(loginPending());

    try {
      const isAuth = await userLogin({ email, password });
      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message));
      }
      dispatch(loginSuccess());
      history.push("/dashboard");
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Login:</h1>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleOnChange}
                value={password}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button type="submit">Login</Button>
            {isLoading && <Spinner variant="primary" animation="border" />}
          </Form>
          <hr />
        </Col>
      </Row>

      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitch("reset")}>
            Forgot Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

//   return (
//     <div>
//       <h1>User Login</h1>
//       <hr />
//       {error && <Alert variant="danger">{error}</Alert>}
//       <form autoComplete="off" onSubmit={handleOnSubmit}>
//         <label htmlFor="email">User Name</label>
//         <input
//           type="text"
//           id="email"
//           name="email"
//           value={email}
//           onChange={handleOnChange}
//           placeholder="Enter email"
//           required
//         />
//         <br />
//         <label htmlFor="password">Password</label>
//         <input
//           type="text"
//           id="password"
//           name="password"
//           value={password}
//           onChange={handleOnChange}
//           placeholder="Enter Password"
//           required
//         />
//         <br />
//         <button type="submit" value="Submit">
//           Log In
//         </button>
//         {isLoading && <Spinner variant="primary" animation="border" />}
//         <hr />
//         <a href="#!" onClick={() => formSwitch("reset")}>
//           Forget Password?
//         </a>
//       </form>
//     </div>
//   );
// };

LoginForm.propTypes = {
  formSwitch: propTypes.func.isRequired,
};
