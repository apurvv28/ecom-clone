import React from "react";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
  Box,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        py: { xs: 4, md: 6 },
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          justifyContent={{
            xs: "flex-start",
            sm: "flex-start",
            md: "space-between",
          }}
          alignItems="flex-start"
          direction={{ xs: "column", sm: "row" }}
        >
          <Grid xs={12} sm={6} md={3}>
            <Box
              sx={{
                textAlign: { xs: "left", sm: "left", md: "left" },
                mb: 2,
              }}
            >
              <Box
                component="img"
                src="/Vector.png"
                alt="Logo"
                sx={{
                  height: 60,
                  mb: 2,
                }}
              />
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={6}
            md={4}
            container
            spacing={2}
            sx={{
              flexDirection: { xs: "row", sm: "row", md: "row", lg: "row" },
              mb: { xs: 2, sm: 0, md: 0 },
              pr: { xs: 1.5, sm: 2, md: 0 },
              mr: { xs: 3, sm: 3, md: 3, lg: 3 },
              gap: { xs: 2, sm: 2, md: 3, lg: 4 },
            }}
          >
            <Grid item xs={6} sm={6} md={4} lg={4}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontSize: { xs: 18, sm: 20, md: 22 },
                  }}
                >
                  Products
                </Typography>
                <Stack spacing={1}>
                  {["Sand Stone", "Stone", "Cement", "Soft Stone"].map(
                    (item) => (
                      <Typography
                        variant="body2"
                        key={item}
                        sx={{
                          color: "white",
                          fontSize: { xs: 13, sm: 14, md: 15 },
                        }}
                      >
                        {item}
                      </Typography>
                    )
                  )}
                </Stack>
              </Box>
            </Grid>
            <Grid xs={6} sm={6} md={4} lg={4}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontSize: { xs: 18, sm: 20, md: 22 },
                  }}
                >
                  Services
                </Typography>
                <Stack spacing={1}>
                  {[
                    "Measurement Service",
                    "Product Advice",
                    "Interior Design",
                  ].map((item) => (
                    <Typography
                      variant="body2"
                      key={item}
                      sx={{
                        color: "white",
                        fontSize: { xs: 13, sm: 14, md: 15 },
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "flex-start", md: "flex-start" },
                alignItems: { xs: "flex-end", md: "flex-end" }, 
              }}
            >
              <Box
                sx={{
                  textAlign: { xs: "left", sm: "left", md: "left" },
                  maxWidth: { xs: "100%", sm: "100%", md: "100%" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontSize: { xs: 18, sm: 20, md: 22 },
                  }}
                >
                  Contact Information
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    mb: 1,
                    fontSize: { xs: 13, sm: 14, md: 15 },
                  }}
                >
                  3181 Al Imam Saud Ibn Abdul Aziz Branch Rd,
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    mb: 1,
                    fontSize: { xs: 13, sm: 14, md: 15 },
                  }}
                >
                  An Nuzhah, Riyadh 12474,
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    mb: 1,
                    fontSize: { xs: 13, sm: 14, md: 15 },
                  }}
                >
                  Saudi Arabia
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="flex-start"
          sx={{
            width: { xs: "100%", sm: "auto" },
            mt: { xs: 3, sm: 4 },
            mb: { xs: 2, sm: 0 },
          }}
        >
          {[Facebook, Twitter, Instagram].map((Icon, index) => (
            <IconButton
              key={index}
              sx={{
                color: "white",
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>
        <Box
          sx={{
            pt: 3,
            mt: 4,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "flex-start", sm: "space-between" },
            alignItems: { xs: "center", sm: "center" },
            gap: 2,
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "grey.500",
            }}
          >
            Copyright © 2025 - All Rights Reserved
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "grey.500",
            }}
          >
            Created with love by thecreation.design
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
