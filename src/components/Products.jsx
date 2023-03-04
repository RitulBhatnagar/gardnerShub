
import Product from "./Product";
import {Box, Typography} from "@mui/material"


const Products = (props) => {
  return (
  <>
    <Typography variant="h3" textAlign="center"
    margin = "28px"
    >
    Our <b>Products</b>
  </Typography>
    <Box
    margin="0 auto"
    display="grid"
    gridTemplateColumns="repeat(auto-fill, 300px)"
    justifyContent="space-around"
    rowGap="20px"
    columnGap="1.33%"
  >
      {props.data.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Box>
  </>
  );
};

export default Products;
