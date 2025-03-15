import React from "react";
import { Box, Typography, Button, Menu, MenuItem } from "@mui/material";
import { MdArrowDropDown } from "react-icons/md";

const Dropdown = ({ label, options, selectedItem, onSelect }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item) => {
    if (item) {
      onSelect(item);
    }
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#020202",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "2.1px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
      <Button
        aria-controls={open ? "dropdown-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<MdArrowDropDown style={{ color: "#B0B0B0" }} />}
        sx={{
          width: "97px",
          height: "28px",
          backgroundColor: "#F3F8FF",
          color: "#0062FF",
          textTransform: "none",
          fontWeight: "bold",
          borderRadius: "4px",
          padding: "4px",
          gap: "10px",
          border: "1px solid #F3F3F3",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#E0ECFF",
          },
        }}
      >
        {selectedItem}
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
        MenuListProps={{
          "aria-labelledby": "dropdown-button",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleClose(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Dropdown;