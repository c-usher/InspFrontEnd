import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./layout/Default_Layout";
import { ShowUnitPage } from "./pages/show_unit/Show_Unit_Page";
import { Dashboard } from "./pages/dashboard/dashboard_page";
import { LoginPage } from "./pages/login/Login_Page";
import { AddUnit } from "./pages/new-unit/Add_Unit_page";
import { ShowUnitsPage } from "./pages/show_units/Show_Units_Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <DefaultLayout>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/add-unit">
              <AddUnit />
            </Route>
            <Route path="/units">
              <ShowUnitsPage />
            </Route>
            <Route path="/unit/:uid">
              <ShowUnitPage />
            </Route>
          </DefaultLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
