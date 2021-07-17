import React from "react";
// import { Route, Switch } from "react-router-dom";
import Student from "../Student/Student";
import Admin from "../Admin/Admin";
import Welcome from "../welcome/welcome";
import LogIn from "../logIn/logIn";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function Main(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Welcome />} />
          <Route exact path="/admin" render={(props) => <Admin {...props} />} />
          <Route exact path="/student" render={(props) => <Student {...props} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <LogIn {...props} />}
          />
        </Switch>
      </Router>
    </>



    // <Switch>
    //   <Route exact path="/" render={(props) => <Welcome />} />
    //   {/* <Route exact path="/admin" render={(props) => <Admin {...props} />} /> */}
    //   {/* <Route exact path="/student" render={(props) => <Student {...props} />} /> */}
    //   <Route>
    //     <div>404</div>
    //   </Route>
    // </Switch>
  );
}
export default Main;