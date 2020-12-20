import React from "react";
import { Route, Switch } from "react-router-dom";
import Characters from "./containers/Characters/Characters";
import Character from "./containers/Character/Character";
import NotFound from "./containers/NotFound/NotFound";
import Layout from "./containers/Layout/Layout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/character/:id" component={Character} />
          <Route exact path="/" component={Characters} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
