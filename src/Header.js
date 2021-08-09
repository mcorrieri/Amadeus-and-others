import React, { useState } from "react";
import { Button, Drawer, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router";

function Header() {
  const [menu, setMenu] = useState(false);
  const [opendrawer, setOpenDrawer] = useState(false);
  let history = useHistory();

  function handleHomeClick() {
    history.push("/");
  }

  function handleGenreClick() {
    history.push("/genres");
  }

  function handlePeriodClick() {
    history.push("/periods");
  }

  function openDrawer() {
    setMenu(!menu);
  }

  function toggleDrawer() {
    setOpenDrawer(!opendrawer);
  }

  return (
    <div className="Header">
      <h1>Welcome to The Classical Period</h1>
      <Button onClick={toggleDrawer}>Menu</Button>
      <Drawer open={openDrawer}>
        <MenuItem onClick={handleHomeClick}>Home</MenuItem>
        <MenuItem onClick={handleGenreClick}>Genres</MenuItem>
        <MenuItem onClick={handlePeriodClick}>Periods</MenuItem>
      </Drawer>
    </div>
  );
}

export default Header;
