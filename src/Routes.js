import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Signup from "./Pages/Signup/Signup";
import Footer from "./Components/Footer/Footer";
import Salary from "./Pages/Salary/Salary";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Main} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/salary" component={Salary} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
