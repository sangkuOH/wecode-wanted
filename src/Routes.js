import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Pages/Signup/SignUpp";
import Salary from "./Pages/Salary/Salary";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/salary" component={Salary} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
