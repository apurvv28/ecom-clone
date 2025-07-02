import React from "react";
import { Box, Typography, Container, Button, Grid, ThemeProvider, useTheme } from "@mui/material";
const PromotionalBanner = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        py: { xs: 2, md: 3 }, 
      }}
    >
      <Container
        maxWidth="md"
        
      >
        <Grid
          sx={{
            minHeight: { xs: 80, sm: 90, md: 90, lg: 100 },
            overflow: "hidden",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            boxShadow: 2,
            position: "relative",
          }}
        >
          <Grid
            sx={{
              flex: 1,
              bgcolor: "white",
              display: "flex",
              alignItems: "left",
              justifyContent: { xs: "center", md: "flex-start" },
              pl: { xs: 2, sm: 3, md: 4 }, 
              pt: { xs: 2, sm: 3, md: 4 },
              pb: { xs: 2, sm: 3, md: 4 },
              minHeight: { xs: 100, md: "100%" }, 
              clipPath: {
                xs: "none",
                md: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
              },
              zIndex: 1,
            }}
          >
            <Grid sx={{ width: "100%", maxWidth: 500 }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 1,
                  fontSize: { xs: 18, sm: 20, md: 24, lg: 28 },
                  fontWeight: 500,
                  fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif !important", 
                }}
              >
                Promotional Banner
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontSize: { xs: 13, sm: 14, md: 15, lg: 17 }, 
                  fontWeight: 400,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  px: 3,
                  py: 1,
                  bgcolor: "black",
                  borderRadius: 0,
                  textTransform: "uppercase",
                  fontSize: 12,
                }}
              >
                Learn More
              </Button>
            </Grid>
          </Grid>
          <Grid
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: { xs: 100, md: "100%" }, 
              p: 0,
              clipPath: {
                xs: "none",
                md: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)",
              },
              zIndex: 0,
            }}
          >
            <Grid
              component="img"
              src="/promo1.jpg"
              alt="Promotional"
              sx={{
                width: "100%",
                height: { xs: 100, sm: 120, md: "100%" },
                minHeight: 100,
                objectFit: "cover",
                borderRadius: 0,
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </ThemeProvider>
  );
};

export default PromotionalBanner;