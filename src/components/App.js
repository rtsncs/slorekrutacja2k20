import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Intro from "./Intro";
import Menu from "./Menu";
import ClassA from "./ClassA";
import ClassB from "./ClassB";
import ClassC from "./ClassC";
import ClassD from "./ClassD";
import ClassE from "./ClassE";
import ClassF from "./ClassF";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Intro />
        <Menu />
        <Switch>
          <Route path="/class-a">
            <ClassA />
          </Route>
          <Route path="/class-b">
            <ClassB />
          </Route>
          <Route path="/class-c">
            <ClassC />
          </Route>
          <Route path="/class-d">
            <ClassD />
          </Route>
          <Route path="/class-e">
            <ClassE />
          </Route>
          <Route path="/class-f">
            <ClassF />
          </Route>
          <Route>
            <Menu />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};
export default App;
