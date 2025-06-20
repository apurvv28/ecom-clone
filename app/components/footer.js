import { Box, Typography, Grid, Link } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const EcommerceFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: 4,
        borderTop: "1px solid #e0e0e0",
        mt: 4,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <ShoppingBagIcon
              sx={{ fontSize: 40, color: "primary.main", mr: 1 }}
            />
            <Typography variant="h6" component="div">
              E-Commerce
            </Typography>
          </Box>
          <Typography variant="body2" color="black" sx={{ mb: 2 }}>
            Your one-stop e-commerce destination
          </Typography>
        </Grid>

        <Grid item xs={6} md={3} >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Products
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", pl: 0, mb: 0 }}>
            <li>
              <Link href="#" underline="hover">
                Sound Stones
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover">
                Stone
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover">
                Clement
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover">
                Soft Stones
              </Link>
            </li>
          </Box>
        </Grid>

        <Grid item xs={6} md={3}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Services
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", pl: 0, mb: 0 }}>
            <li>
              <Link href="#" underline="hover">
                Measurement Services
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover">
                Product Adviser
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover">
                Interior Design
              </Link>
            </li>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
            Contact Information
          </Typography>
          <Typography variant="body2" color="black">
            Shivajinagar,
            <br />
            Pune, Maharashtra 411016
            <br />
            India
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, pt: 2, borderTop: "1px solid #e0e0e0" }}>
        <Typography variant="body2" color="text.secondary" align="center">
          Copyright © {new Date().getFullYear()} by E-commerce.
        </Typography>
      </Box>
    </Box>
  );
};

export default EcommerceFooter;
