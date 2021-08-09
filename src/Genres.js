import React, { useState, useEffect } from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";
import axios from "axios";

function Genres() {
  const [genre, setGenre] = useState([]);

  const url = `https://api.openopus.org/genre/list/composer/2.json`;

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setGenre(res.data.genres);
    });
  }, []);

  return (
    <div>
      <h1>Classical Genres</h1>
      <FormControl variant="outlined" className="form">
        <InputLabel id="demo-simple-select-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          autoWidth
        >
          <MenuItem value={10}>Popular</MenuItem>
          <MenuItem value={20}>Recommended</MenuItem>
          <MenuItem value={30}>Chamber</MenuItem>
          <MenuItem value={30}>Keyboard</MenuItem>
          <MenuItem value={30}>Orchestral</MenuItem>
          <MenuItem value={30}>Vocal</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Genres;
