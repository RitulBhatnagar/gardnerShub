import {
  Facebook,
  Instagram,
  MailOutline,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

function Footer() {

  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor = "#f5f5f5">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color= "#d6001c"
          >
            GardnerShub
          </Typography>
           <Box
           display  = "flex"
           justifyContent="space-around"
           marginLeft="-30px"
           >
                <Facebook/>
          <MailOutline/>
          <Instagram/>
          <Twitter/>
          <Pinterest/>
           </Box>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
           Vijay Nagar Ghaziabad
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email : garndnerShub@gmail.com
          </Typography>
          <Typography mb="30px">(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;