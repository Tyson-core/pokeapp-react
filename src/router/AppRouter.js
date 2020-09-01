import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from "../components/HomeScreen";
import { ChartCompareScreen } from "../components/chartCompare/ChartCompareScreen";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route component={HomeScreen} path="/" exact />
          <Route component={ChartCompareScreen} path="/compare" exact />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
