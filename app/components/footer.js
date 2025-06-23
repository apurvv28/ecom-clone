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
          justifyContent={{ xs: "flex-start", md: "space-between" }}
          alignItems="flex-start"
          direction={{ xs: "column", sm: "row" }}
        >
          <Grid item xs={12} sm={6} md={3}>
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
          <Grid item xs={12} sm={3} md={2}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontSize: { xs: 18, sm: 20, md: 22 },
                  fontWeight: 500,
                }}
              >
                Products
              </Typography>
              <Stack spacing={1}>
                {["Sand Stone", "Stone", "Cement", "Soft Stone"].map((item) => (
                  <Typography
                    variant="body2"
                    key={item}
                    sx={{
                      color: "white",
                      fontSize: { xs: 13, sm: 14, md: 15 },
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontSize: { xs: 18, sm: 20, md: 22 },
                  fontWeight: 500,
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
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                textAlign: { xs: "left", sm: "left", md: "left" },
                mt: { xs: 2, sm: 0 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontSize: { xs: 18, sm: 20, md: 22 },
                  fontWeight: 500,
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
                  fontWeight: 400,
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
                  fontWeight: 400,
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
                  fontWeight: 400,
                }}
              >
                Saudi Arabia
              </Typography>
            </Box>
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
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "grey.500",
              fontSize: { xs: 12, sm: 13, md: 14 },
              fontWeight: 400,
            }}
          >
            Copyright © 2025 - All Rights Reserved
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "grey.500",
              fontSize: { xs: 12, sm: 13, md: 14 },
              fontWeight: 400,
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