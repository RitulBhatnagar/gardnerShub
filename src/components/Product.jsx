
import { Box, Typography } from "@mui/material";



const Product = ({ item }) => { 
  return (
    <Box width = "90%">
      <Box
        position="relative"
      >
        <img
          alt={item.name}
          width="300px"
          height="400px"
          src = {item.img}
          style = {{cursor : "pointer"}}
        />

      </Box>

      <Box mt="3px">
        <Typography color = "#292929">SunFlower</Typography>
        <Typography fontWeight="bold">Rs.200</Typography>
      </Box>
    </Box>
  );
};

export default Product;