import React from "react";
import { Route, Switch } from "react-router-dom";
import Student from "../Student/Student";
import Admin from "../Admin/Admin";

function Main(props) {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Admin {...props} />} />
      <Route exact path="/student" render={(props) => <Student {...props} />} />
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}

export default Main;
