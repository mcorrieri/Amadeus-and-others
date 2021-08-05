import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ComposerCard from "./ComposerCard";
import { Card } from "@material-ui/core/";

// https://api.openopus.org/composer/list/pop.json

function App() {
  const [composers, setComposers] = useState([]);

  const url = `https://api.openopus.org/composer/list/pop.json`;

  useEffect(() => {
    axios.get(url).then((res) => {
      // console.log(res);
      const data = res.data.composers;
      console.log(data);
      setComposers(data);
    });
  }, []);

  const composerCards = composers.map((composerObj) => {
    console.log(composerObj);
    return <ComposerCard key={composerObj.id} composer={composerObj} />;
  });

  return (
    <div className="App">
      <h1>Welcome to The Classical Period</h1>
      <Card>{composerCards}</Card>
    </div>
  );
}

export default App;
