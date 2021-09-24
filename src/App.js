import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import ResumePage from "./Components/Resume";
import Home from "./Components/Home";

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={() => (
          <Home
          />
        )} />
        <Route exact path="/Resume" component={ResumePage} />
      </Switch>
    </>
  );
}

export default App;
