import React from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@material-ui/core";

function Periods() {
  return (
    <div>
      <h1>Classical Periods</h1>
      <div className="dropdown-filters">
        <FormControl variant="outlined" className="form">
          <InputLabel id="demo-simple-select-label">Period</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            autoWidth
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

export default Periods;
