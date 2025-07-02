import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";

const ProductGrid = () => {
  const theme = useTheme();

  const products = [
    {
      name: "Zurich Vision 60×60",
      price: "237.99 SAR",
      originalPrice: "550.99 SAR",
      image: "/img1.jpg",
    },
    {
      name: "Zurich Pearl 60×60",
      price: "312.99 SAR",
      originalPrice: "550.99 SAR",
      image: "/img2.jpg",
    },
    {
      name: "Zurich Grey 60×60",
      price: "319.99 SAR",
      originalPrice: "550.99 SAR",
      image: "/img3.jpg",
    },
    {
      name: "Zurich Dark Grey 60×60",
      price: "375.99 SAR",
      originalPrice: "550.99 SAR",
      image: "/img4.jpg",
    },
    {
      name: "Windsor White OAK",
      price: "312.99 SAR",
      originalPrice: "550.99 SAR",
      image: "/img5.jpg",
    },
    {
      name: "Sicily Grey Décor 30×60",
      price: "312.99 SAR",
      originalPrice: "550.99 SAR",
      image: "/img6.jpg",
    },
    {
      name: "Sardinia White",
      price: "312.99 SAR",
      originalPrice: "550.99 SAR",
      image: "/img7.jpg",
    },
    {
      name: "Sicily Grey 30×60",
      price: "312.99 SAR",
      originalPrice: "550.99 SAR",
      image: "/img8.jpg",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
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
                  border: `1px solid`,
                  borderColor: "grey.200",
                  overflow: "hidden",
                  width: {
                    xs: "44vw", 
                    sm: "33vw",
                    md: "21vw",
                    lg: 262,
                  },
                  maxWidth: {
                    sm: 240,
                    md: 260,
                    lg: 280,
                  },
                  height: {
                    xs: 250,
                    sm: 260,
                    md: 300,
                    lg: 340,
                  },
                  display: "flex",
                  flexDirection: "column",
                  background: "#fff",
                  boxShadow: 1,
                  transition: "box-shadow 0.2s",
                  "&:hover": {
                    boxShadow: 4,
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    flex: "0 0 70%",
                    height: {
                      xs: "70%",
                      sm: "70%",
                      md: "70%",
                      lg: "70%",
                    },
                    minHeight: 0,
                    position: "relative",
                    overflow: "hidden",
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
                      display: "block",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    flex: "1 1 30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    px: { xs: 1, sm: 1.5, md: 2 },
                    py: { xs: 1, sm: 1.5 },
                    minHeight: 0,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      textAlign: "center",
                      fontWeight: 500,
                      mb: 0.5,
                      fontSize: {
                        xs: 15,
                        sm: 17,
                        md: 18,
                        lg: 20,
                      },
                      lineHeight: 1.2,
                      maxWidth: "100%",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    {product.originalPrice && (
                      <Typography
                        variant="caption"
                        sx={{
                          textDecoration: "line-through",
                          color: "grey.400",
                          fontWeight: 400,
                          fontSize: {
                            xs: 10,
                            sm: 11,
                            md: 12,
                            lg: 13,
                          },
                        }}
                      >
                        {product.originalPrice}
                      </Typography>
                    )}
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: "grey.900",
                        fontSize: {
                          xs: 13,
                          sm: 14,
                          md: 15,
                          lg: 16,
                        },
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
