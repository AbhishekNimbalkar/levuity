import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MdArrowDropDown } from "react-icons/md";

export default function BasicMenu2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState("CA-I"); // Default selected item
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    if (item) {
      setSelectedItem(item); // Update selected item
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<MdArrowDropDown style={{ color: "#B0B0B0" }} />} // Arrow color
        sx={{
          width: "97px", // Set width to 97px
          height: "28px", // Set height to 28px
          backgroundColor: "#F3F8FF", // Button background color
          color: "#0062FF", // Button text color
          textTransform: "none", // Prevent uppercase text
          fontWeight: "bold", // Make text bold
          borderRadius: "4px", // Rounded corners
          padding: "4px", // Set padding to 4px
          gap: "10px", // Set gap to 10px
          border: "1px solid #F3F3F3", // Border color
          display: "flex", // Use flexbox for alignment
          justifyContent: "space-between", // Align text to left and icon to right
          alignItems: "center", // Vertically center content
          '&:hover': {
            backgroundColor: "#E0ECFF", // Slightly darker blue on hover
          },
        }}
      >
        {selectedItem}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose("CA-I")}>CA-I</MenuItem>
        <MenuItem onClick={() => handleClose("IIT JEE")}>IIT JEE</MenuItem>
        <MenuItem onClick={() => handleClose("NEET")}>NEET</MenuItem>
      </Menu>
    </div>
  );
}