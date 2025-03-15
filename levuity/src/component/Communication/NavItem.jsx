import React from "react";
import { Box, Typography } from "@mui/material";

const NavItem = ({ icon, label }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
          opacity: 0.8,
        },
      }}
    >
      {icon}
      <Typography variant="caption" sx={{ mt: 0.5 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default NavItem;