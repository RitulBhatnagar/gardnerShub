
import {  Box } from "@mui/material";



function Navbar() {
  return (
    <Box
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
      textAlign  = "center"
    >
      <Box
        width="100%"
        marginTop = "20px"
        marginLeft = "auto"
        marginRight = "auto"
      >
        <Box
          sx={{ "&:hover": { cursor: "pointer" } }}
          color = "#228C22"
          fontWeight = "bold"
          fontSize="1.4rem"
          letterSpacing = "4px"
        >
           GARDNERSHUB
        </Box>
      
      </Box>
    </Box>
  );
}

export default Navbar;