import { Card } from "@material-ui/core";
import React from "react";
import { Link } from "@material-ui/core";

function ComposerCard({ composer }) {
  const { id, name, complete_name, birth, death, portrait } = composer;
  return (
    <Card>
      <Link>
        <h1>{name}</h1>
      </Link>
      <p>{complete_name}</p>
      <img src={portrait} alt="composer pic" />
      <p>Born in: {birth.substring(0, 4)}</p>
      <p>Death: {death.substring(0, 4)}</p>
    </Card>
  );
}

export default ComposerCard;
