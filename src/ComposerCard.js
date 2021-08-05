import { Card } from "@material-ui/core";
import React from "react";

function ComposerCard({ composer }) {
  const { id, name, complete_name, birth, death, portrait } = composer;
  return (
    <Card>
      <h1>{name}</h1>
      <p>{complete_name}</p>
      <img src={portrait} alt="composer pic" />
      <p>Born in: {birth}</p>
      <p>Death: {death}</p>
    </Card>
  );
}

export default ComposerCard;
