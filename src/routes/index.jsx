import { Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Route from "./route";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login" component={Login} />
      <Route exact path="/dashboard/habits"></Route>
      <Route exact path="/dasboard/groups"></Route>
    </Switch>
  );
}

export default Routes;
