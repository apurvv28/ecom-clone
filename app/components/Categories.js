import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const categories = [
  {
    title: "Living Rooms",
    subtitle: "Space for Relaxation",
    description: "Sophisticated living spaces designed for comfort and style",
    image: "/cat2.jpg",
  },
  {
    title: "Indoor Gardens",
    subtitle: "Green Oasis",
    description: "Natural indoor gardens that bring tranquility and freshness",
    image: "/cat3.jpg",
  },
  {
    title: "Interior Design",
    subtitle: "Elegant Spaces",
    description: "Elegant interior designs that blend aesthetics with functionality",
    image: "/cat4.jpg",
  },
];

const CARD_HEIGHT = { xs: 340, sm: 360, md: 380, lg: 380 };
const CARD_WIDTH = { xs: 210, sm: 220, md: 250, lg: 260 };

const Categories = () => {
  const theme = useTheme();
  const isMobileOrTab = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    
    <Container
      maxWidth="lg"
      sx={{
        backgroundImage: "url('/Vector3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid sx={{ py: { xs: 3, md: 6 } }}>
        {isMobileOrTab ? (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              gap: 2,
              pb: 2,
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
            }}
          >
            <Grid
              sx={{
                bgcolor: "#222",
                color: "#fff",
                p: { xs: 3, sm: 4 },
                height: CARD_HEIGHT,
                width: CARD_WIDTH,
                minWidth: CARD_WIDTH,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "grey.400",
                }}
              >
                Interior Design
              </Typography>
              <Typography
                variant="h5"
                fontWeight={600}
              >
                Categories
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "grey.200",
                }}
              >
                Browse premium interior design categories—sophisticated living spaces, serene bedrooms, and sleek kitchens—crafted to blend aesthetics with functionality for a harmonious home.
              </Typography>
            </Grid>
            {categories.map((cat, idx) => (
              <Grid
                key={idx}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: CARD_HEIGHT,
                  width: CARD_WIDTH,
                  minWidth: CARD_WIDTH,
                  background: "#eee",
                  display: "flex",
                  alignItems: "flex-end",
                  boxShadow: 1,
                }}
              >
                <Grid
                  component="img"
                  src={cat.image}
                  alt={cat.title}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 1,
                  }}
                />
                <Grid
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    width: "100%",
                    p: { xs: 2, sm: 3 },
                    background:
                      "linear-gradient(0deg, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.15) 100%)",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "grey.300",
                    }}
                  >
                    {cat.subtitle}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                    }}
                  >
                    {cat.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "grey.300",
                    }}
                  >
                    {cat.description}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            container
            spacing={4}
            justifyContent="flex-start"
            alignItems="stretch"
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid
                sx={{
                  bgcolor: "#222",
                  color: "#fff",
                  p: { xs: 3, sm: 4 },
                  height: CARD_HEIGHT,
                  width: CARD_WIDTH,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "grey.400",
                  }}
                >
                  Interior Design
                </Typography>
                <Typography
                  variant="h5"
                >
                  Categories
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "grey.200",
                  }}
                >
                  Browse premium interior design categories—sophisticated living spaces, serene bedrooms, and sleek kitchens—crafted to blend aesthetics with functionality for a harmonious home.
                </Typography>
              </Grid>
            </Grid>
            {categories.map((cat, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={idx}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Grid
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: CARD_HEIGHT,
                    width: CARD_WIDTH,
                    background: "#eee",
                    display: "flex",
                    alignItems: "flex-end",
                    boxShadow: 1,
                  }}
                >
                  <Grid
                    component="img"
                    src={cat.image}
                    alt={cat.title}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 1,
                    }}
                  />
                  <Grid
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      width: "100%",
                      p: { xs: 2, sm: 3 },
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.15) 100%)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "grey.300",
                      }}
                    >
                      {cat.subtitle}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    >
                      {cat.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "grey.300",
                      }}
                    >
                      {cat.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Categories;