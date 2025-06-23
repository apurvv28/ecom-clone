import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";

const ProductGrid = () => {
  const theme = useTheme();

  const products = [
    {
      name: "Zurich Vision 60×60",
      price: "237.99 SAR",
      originalPrice: "440.99 SAR",
      image: "/img1.jpg",
    },
    {
      name: "Zurich Pearl 60×60",
      price: "312.49 SAR",
      originalPrice: "440.99 SAR",
      image: "/img2.jpg",
    },
    {
      name: "Zurich Grey 60×60",
      price: "312.49 SAR",
      originalPrice: "440.99 SAR",
      image: "/img3.jpg",
    },
    {
      name: "Zurich Dark Grey 60×60",
      price: "312.49 SAR",
      originalPrice: "440.99 SAR",
      image: "/img4.jpg",
    },
    {
      name: "Windsor White OAK",
      price: "312.49 SAR",
      originalPrice: "440.99 SAR",
      image: "/img5.jpg",
    },
    {
      name: "Sicily Grey Décor 30×60",
      price: "312.49 SAR",
      originalPrice: "440.99 SAR",
      image: "/img6.jpg",
    },
    {
      name: "Sardinia White",
      price: "312.49 SAR",
      originalPrice: "440.99 SAR",
      image: "/img7.jpg",
    },
    {
      name: "Sicily Grey 30×60",
      price: "312.49 SAR",
      originalPrice: "440.99 SAR",
      image: "/img8.jpg",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3} 
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 1,
                  overflow: "hidden",
                  height: { xs: 320, sm: 340, md: 360, lg:380 },
                  width: { xs: 180, sm: 210, md: 240, lg: 260 },
                  display: "flex",
                  flexDirection: "column",
                  background: "#fff",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 180,
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    p: 2,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {product.originalPrice && (
                      <Typography
                        variant="body2"
                        sx={{
                          textDecoration: "line-through",
                          color: "grey.400",
                          fontWeight: 400,
                          fontSize: { xs: 15, sm: 16 },
                        }}
                      >
                        {product.originalPrice}
                      </Typography>
                    )}
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 500,
                        color: "grey.900",
                        fontSize: { xs: 17, sm: 18 },
                      }}
                    >
                      {product.price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ProductGrid;
