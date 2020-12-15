import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hello from "../pages/Hello";
import SafetyCheck from "../pages/SafetyCheck";
import Purchase from "../pages/Purchase";
import ModelOutput from "../pages/ModelOutput";
import ModelVr from "../pages/ModelVr";
import Bottom from "../pages/Bottom";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Hello />
        </Route>
        <Route exact path="/hello">
          <Hello />
        </Route>
        <Route exact path="/safetycheck">
          <SafetyCheck />
        </Route>
        <Route exact path="/purchase">
          <Purchase />
        </Route>
        <Route exact path="/modeloutput">
          <ModelOutput />
        </Route>
        <Route exact path="/modelvr">
          <ModelVr />
        </Route>
      </Switch>
      <Bottom />
    </BrowserRouter>
  );
}

export default Router;
