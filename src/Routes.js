import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Pages/Signup/SignUpp";
import Salary from "./Pages/Salary/Salary";
import JobSlide from "./Pages/Explore/Explore";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/salary" component={Salary} />
          <Route exact path="/jobslide" component={JobSlide} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
