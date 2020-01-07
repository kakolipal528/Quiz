import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayScreen from "./Components/DisplayScreen";
import QuizScreen from "./Components/QuizScreen";
import Result from "./Components/Result";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Result.js/:score" name="Result" component={Result} />
        <Route path="/QuizScreen.js" name="QuizScreen" component={QuizScreen} />
        <Route path="/" name="Home" component={DisplayScreen} />
      </Switch>
    </Router>
  );
}

export default App;
