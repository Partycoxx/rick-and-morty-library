import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import Characters from "./containers/Characters/Characters";
import Character from "./containers/Character/Character";

import "./App.css";

function App() {
  return <div className="App">
    <Layout>
      <Switch>
        <Route path="/character/:id" component={Character}/>
        <Route path="/" component={Characters} />
      </Switch>
    </Layout>
  </div>;
}

export default App;
