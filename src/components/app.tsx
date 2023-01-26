// DEPENDENCIES
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// COMPONENTS
import Range from "./range/range.component";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/exercise1"}>
          <Range
            min={1}
            max={1000}
            mode="normal"
            onChange={(min, max) =>
              console.log(
                `Min is ${min.toFixed(2)} and max is ${max.toFixed(2)}`
              )
            }
          />
        </Route>
        <Route exact path={"/exercise2"}>
          <Range
            min={1}
            max={1000}
            mode="fixed"
            onChange={(min, max) =>
              console.log(
                `Min is ${min.toFixed(2)} and max is ${max.toFixed(2)}`
              )
            }
          />
        </Route>
        <Redirect to="/exercise1" />
      </Switch>
    </Router>
  );
}

export default App;
