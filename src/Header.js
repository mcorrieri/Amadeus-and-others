import React from "react";
import {
  Card,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";

function Header() {
  return (
    <div className="Header">
      <h1>Welcome to The Classical Period</h1>
      <div className="dropdown-filters">
        <FormControl variant="outlined" className="form">
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={null}
            onChange={null}
          >
            <MenuItem value={10}>Popular</MenuItem>
            <MenuItem value={20}>Recommended</MenuItem>
            <MenuItem value={30}>Chamber</MenuItem>
            <MenuItem value={30}>Keyboard</MenuItem>
            <MenuItem value={30}>Orchestral</MenuItem>
            <MenuItem value={30}>Vocal</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className="form">
          <InputLabel id="demo-simple-select-label">Period</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={null}
            onChange={null}
          >
            <MenuItem value={10}>Medieval</MenuItem>
            <MenuItem value={20}>Renaissance</MenuItem>
            <MenuItem value={30}>Baroque</MenuItem>
            <MenuItem value={30}>Classical</MenuItem>
            <MenuItem value={30}>Early Romantic</MenuItem>
            <MenuItem value={30}>Romantic</MenuItem>
            <MenuItem value={30}>Late Romantic</MenuItem>
            <MenuItem value={30}>20th Century</MenuItem>
            <MenuItem value={30}>Post-War</MenuItem>
            <MenuItem value={30}>21st Century</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Header;
