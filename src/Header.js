import React, { useState } from "react";
import { Button, Drawer, MenuItem } from "@material-ui/core";

function Header() {
  const [menu, setMenu] = useState(false);
  const [opendrawer, setOpenDrawer] = useState(false);

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
        <MenuItem>Home</MenuItem>
        <MenuItem>Genres</MenuItem>
        <MenuItem>Periods</MenuItem>
      </Drawer>
    </div>
  );
}

export default Header;
