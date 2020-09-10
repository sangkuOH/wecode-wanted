import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Salary from "./Pages/Salary/Salary";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/Signup/SignUp";
import Resume from "./Pages/Resume/Resume";
import ResumeDetail from "./Pages/ResumeDetail/ResumeDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/salary" component={Salary} />
          <Route exact path="/cv/" component={Resume} />
          <Route exact path="/cv/:id" component={ResumeDetail} />
          <Route exact path="/" component={Main} />

        </Switch>
      </Router>
    );
  }
}
export default Routes;
