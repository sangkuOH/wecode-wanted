import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Pages/Signup/SignUpp";
import Salary from "./Pages/Salary/Salary";
import JobSlide from "./Pages/Explore/Explore";
import Main from "./Pages/Main/Main";
import DetailPage from "./Components/DetailPage/DetailPage";
import DetailSupport from "./Components/DetailPage/DetailSupport/DetailSupport";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/salary" component={Salary} />
          <Route exact path="/jobslide" component={JobSlide} />
          <Route exact path="/" component={Main} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route exact path="/Support" component={DetailSupport} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
