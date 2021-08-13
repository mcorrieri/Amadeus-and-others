import React, { useState } from "react";
import { useHistory } from "react-router";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function Header() {
  return (
    <div className="Header">
      <h1>Welcome to The Classical Period</h1>
      <div className="dropdowns">
        <FormControl className="genre-form">
          <InputLabel className="genre-select">Genre</InputLabel>
          <Select className="genre-select-label" id="demo-simple-select">
            <MenuItem>Popular</MenuItem>
            <MenuItem>Recommended</MenuItem>
            <MenuItem>Chamber</MenuItem>
            <MenuItem>Keyboard</MenuItem>
            <MenuItem>Orchestral</MenuItem>
            <MenuItem>Vocal</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="period-form">
          <InputLabel className="period-select">Period</InputLabel>
          <Select className="period-select-label" id="demo-simple-select">
            <MenuItem>Medieval</MenuItem>
            <MenuItem>Renaissance</MenuItem>
            <MenuItem>Baroque</MenuItem>
            <MenuItem>Classical</MenuItem>
            <MenuItem>Early Romantic</MenuItem>
            <MenuItem>Romantic</MenuItem>
            <MenuItem>Late Romantic</MenuItem>
            <MenuItem>20th Century</MenuItem>
            <MenuItem>Post-War</MenuItem>
            <MenuItem>21st Century</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Header;
