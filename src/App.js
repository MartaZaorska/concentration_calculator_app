import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Conversion from "./pages/Conversion";
import Dose from "./pages/Dose";
import Concentration from "./pages/Concentration";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/conversion" component={Conversion} />
        <Route exact path="/dose" component={Dose} />
        <Route exact path="/concentration" component={Concentration} />
      </Switch>
    </div>
  );
}

export default App;
