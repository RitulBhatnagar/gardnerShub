
import { Box, Typography } from "@mui/material";
import  OrderButton from './OrderButton';
import whatsappicon  from "../resources/whatsappicon.png"


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
          src = {item.imageUrl}
          style={{ borderRadius: '12px' }}
        />

        <OrderButton text = "Order now" icon={whatsappicon}  />

      </Box>

      <Box mt="3px">
        <Typography color = "#292929">{item.name}</Typography>
        <Typography fontWeight="bold">₹{item.price}</Typography>
      </Box>
    </Box>
  );
};

export default Product;