import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
function Header() {
  const [menu, setMenu] = useState(null);

  return (
    <div className="Header">
      <h1>Welcome to The Classical Period</h1>
      <Drawer></Drawer>
    </div>
  );
}

export default Header;
