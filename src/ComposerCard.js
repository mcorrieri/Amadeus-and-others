import {
  Card,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import React from "react";
import { Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function ComposerCard({ composer }) {
  let history = useHistory();

  const { id, name, complete_name, birth, death, portrait } = composer;

  function handleClick() {
    history.push("/composerworks");
  }

  return (
    <div>
      <Card>
        <Link onClick={handleClick}>
          <h1>{name}</h1>
        </Link>
        <p>{complete_name}</p>
        <img src={portrait} alt="composer pic" />
        <p>Born in: {birth.substring(0, 4)}</p>
        <p>Death: {death.substring(0, 4)}</p>
      </Card>
    </div>
  );
}

export default ComposerCard;
