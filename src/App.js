import React, { Fragment } from "react";
import "./App.css";

import Home from "./containers/Home";
import Rooms from "./containers/Rooms";
import DetailRoom from "./containers/DetailRoom";
import Error from "./containers/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room/:slug" component={DetailRoom} />
        <Route path="/room" component={Rooms} />
        <Route component={Error} />
      </Switch>
      
    </Fragment>
  );
}

export default App;
