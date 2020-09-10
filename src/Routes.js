import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./Pages/Signup/SignUp";
import Salary from "./Pages/Salary/Salary";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/Signup/SignUp";
import Resume from "./Pages/Resume/Resume";
import ResumeDetail from "./Pages/ResumeDetail/ResumeDetail";
import DetailPage from "./Components/DetailPage/DetailPage";
import DetailSupport from "./Components/DetailPage/DetailSupport/DetailSupport";
import Apply from "./Pages/Apply/Apply";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/salary" component={Salary} />
          <Route exact path="/cv/" component={Resume} />
          <Route exact path="/cv/:id" component={ResumeDetail} />
          <Route exact path="/" component={Main} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route exact path="/Support" component={DetailSupport} />
          <Route exact path="/apply" component={Apply} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
