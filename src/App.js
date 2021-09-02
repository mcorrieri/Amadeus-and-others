import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComposerCard from "./ComposerCard";
import { Card } from "@material-ui/core/";
import Genres from "./Genres";
import NotFound from "./NotFound";
import WorksbyComposer from "./WorksbyComposer";
import Header from "./Header";
import Periods from "./Periods";
import SignUp from "./SignUp";
import Login from "./Login";

// https://api.openopus.org/composer/list/pop.json

function App() {
  const [composers, setComposers] = useState([]);
  const [user, setUser] = useState(null);

  const url = `https://api.openopus.org/composer/list/pop.json`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      const data = res.data.composers;
      console.log(data);
      setComposers(data);
    });
  }, []);

  // fetch("http://localhost:3000/auto_login", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `bearer ${JWT_TOKEN}`,
  //   },
  //   body: JSON.stringify(requestBody),
  // })

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      console.log(res);
      const data = res.users;
      console.log(data);
      setUser(data);
    });
  }, []);

  const composerCards = composers.map((composerObj) => {
    // console.log(composerObj);
    return <ComposerCard key={composerObj.id} composer={composerObj} />;
  });

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Card>{composerCards}</Card>
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/genres">
            <Genres />
          </Route>
          <Route exact path="/periods">
            <Periods />
          </Route>
          <Route exact path="/composerworks">
            <WorksbyComposer />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
