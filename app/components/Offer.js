import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";

const PromotionalBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        py: { xs: 3, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          sx={{
            minHeight: { xs: 180, sm: 220, md: 240, lg: 260 },
            borderRadius: 2,
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
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              pl: { xs: 3, sm: 4, md: 6 },
              pt: { xs: 3, sm: 4, md: 6 },
              pb: { xs: 3, sm: 4, md: 6 },
              minHeight: { xs: 200, md: "100%" },
              clipPath: {
                xs: "none",
                md: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)", 
              },
              zIndex: 1,
            }}
          >
            <Grid sx={{ width: "100%", maxWidth: 480 }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  fontSize: { xs: 22, sm: 26, md: 32, lg: 40 },
                  fontWeight: 500,
                }}
              >
                Promotional Banner
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontSize: { xs: 14, sm: 16, md: 18, lg: 20 },
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
                  px: 4,
                  py: 1.5,
                  bgcolor: "black",
                  borderRadius: 0,
                  textTransform: "uppercase",
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
              minHeight: { xs: 200, md: "100%" },
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
                height: { xs: 200, sm: 250, md: "100%" },
                minHeight: 200,
                objectFit: "cover",
                borderRadius: 0,
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PromotionalBanner;