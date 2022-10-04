import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="md:hidden !rounded-none " >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="!font-netflix !text-white"
      >
        Browse
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        className="menu"
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className="!font-netflix" onClick={handleClose}>Home</MenuItem>
        <MenuItem className="!font-netflix" onClick={handleClose}>Tv shows</MenuItem>
        <MenuItem className="!font-netflix" onClick={handleClose}>Movies</MenuItem>
        <MenuItem className="!font-netflix" onClick={handleClose}>New & popular</MenuItem>
        <MenuItem className="!font-netflix" onClick={handleClose}>My list</MenuItem>
      </Menu>
    </div>
  );
}
