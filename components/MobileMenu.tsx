import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { PugaMovie } from "../typing";
import { DocumentData } from "firebase/firestore";
import { Link as LinkScroll } from "react-scroll";

interface IProps {
  list: PugaMovie[] | DocumentData[];
}

export default function MobileMenu({ list }: IProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="md:hidden !rounded-none ">
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
        {" "}
        <LinkScroll to="home" offset={-80} smooth={true} spy={true}>
          <MenuItem className="!font-netflix" onClick={handleClose}>
            Home
          </MenuItem>
        </LinkScroll>
        <LinkScroll to="all" offset={-80} smooth={true} spy={true}>
          <MenuItem className="!font-netflix" onClick={handleClose}>
            Tv shows
          </MenuItem>
        </LinkScroll>
        <LinkScroll to="all" offset={-80} smooth={true} spy={true}>
          <MenuItem className="!font-netflix" onClick={handleClose}>
            Movies
          </MenuItem>
        </LinkScroll>
        <LinkScroll to="all" offset={-80} smooth={true} spy={true}>
          <MenuItem className="!font-netflix" onClick={handleClose}>
            New & popular
          </MenuItem>
        </LinkScroll>
        <LinkScroll to="myList" offset={-80} smooth={true} spy={true}>
          {list.length > 0 && (
            <MenuItem className="!font-netflix" onClick={handleClose}>
              My list
            </MenuItem>
          )}
        </LinkScroll>
      </Menu>
    </div>
  );
}
