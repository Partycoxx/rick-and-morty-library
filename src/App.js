import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainLayout } from "./containers/MainLayout";
import { AllCharacters } from "./containers/AllCharacters";
import { SingleCharacter } from "./containers/SingleCharacter";
import { NotFound } from "./components/NotFound";

import "./App.css";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Switch>
          <Route path="/rick-and-morty-library/character/:id" component={SingleCharacter} />
          <Route exact path="/rick-and-morty-library/" component={AllCharacters} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </div>
  );
}

export default App;
