import React, { useState } from "react";
import { Button, Drawer, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router";

function Header() {
  const [menu, setMenu] = useState(false);
  const [opendrawer, setOpenDrawer] = useState(false);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
    setMenu(menu);
  }

  // function toggleDrawer() {
  //   setOpenDrawer(!opendrawer);
  // }

  return (
    <div className="Header">
      <h1>Welcome to The Classical Period</h1>
      <Button onClick={toggleDrawer}>Menu</Button>
      <Drawer
        className="menu"
        // variant="persistent"
        anchor="left"
        // open={state}
        // onClose={!setState}
      >
        <MenuItem onClick={handleHomeClick}>Home</MenuItem>
        <MenuItem onClick={handleGenreClick}>Genres</MenuItem>
        <MenuItem onClick={handlePeriodClick}>Periods</MenuItem>
      </Drawer>
    </div>
  );
}

export default Header;
