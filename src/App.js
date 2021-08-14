import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ShowUnitPage } from "./pages/show_unit/Show_Unit_Page";
import { Dashboard } from "./pages/dashboard/Dashboard_page";
import { LoginPage } from "./pages/login/Login_Page";
import { AddUnit } from "./pages/new-unit/Add_Unit_page";
import { ShowUnitsPage } from "./pages/show_units/Show_Units_Page";
import { PrivateRoute } from "./components/private-route/Private_Route";
import { RegPage } from "./pages/registration/Reg_Page";
import { UserVerifyPage } from "./pages/user-verify/User_Verify_Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/registration">
            <RegPage />
          </Route>
          <Route exact path="/verify/:_id/:email">
            <UserVerifyPage />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/add-unit">
            <AddUnit />
          </PrivateRoute>
          <PrivateRoute path="/units">
            <ShowUnitsPage />
          </PrivateRoute>
          <PrivateRoute path="/unit/:uId">
            <ShowUnitPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
