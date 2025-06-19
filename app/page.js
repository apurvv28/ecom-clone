import { Stack, Typography, Box, Grid } from "@mui/material";
import Navbar from "./components/navbar";
import Image from "next/image";
import ClientThemeProvider from "./components/ClientThemeProvider";
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
export default function Home() {
  return (
    <ClientThemeProvider>
      <Stack sx={{ width: "100vw", overflowX: "hidden" }}>
        <Navbar />
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            height: { xs: 250, sm: 350, md: 450 },
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <Image
            src="/hero.png"
            alt="hero"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              bgcolor: "rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              color: "white",
              textAlign: "left",
              px: 2,
              py: 4,
            }}
          >
            <Typography
              variant="h2"
              color="white"
              sx={{
                fontWeight: 700,
                mb: 2,
                pl: 10,
              }}
            >
              CATALOG
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{
                maxWidth: 600,
                pl: 10,
              }}
            >
              Discover our exclusive collection of products and services
              tailored for your needs. Explore the latest trends and find your
              perfect match in our catalog.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={2} sx={{ px: 2, mb: 4 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  width: { xs: '100%', md: 400 },
                  height: { xs: 200, md: 500 },
                  bgcolor: 'black',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  p: 3,
                  borderRadius: 2,
                }}
              > 
                <Typography
                  variant="h3"
                  color="white"
                  sx={{ mb: 1 }}
                >
                  CATEGORIES
                </Typography>
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ maxWidth: 300 }}
                >
                  Browse our collection of products and services designed to meet your needs.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  width: { xs: '100%', md: 400 },
                  height: { xs: 200, md: 500 },
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/cat1.jpg"
                  alt="Image 2"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 400px"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    background: 'linear-gradient(to bottom, #111010 0%, rgba(17,16,16,0.7) 37%, rgba(17,16,16,0) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    p: 3,
                    zIndex: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      mt: 1,
                    }}
                  >
                    Living Room
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      maxWidth: 250,
                    }}
                  >
                    Modern and classic living room furniture and decor.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  width: { xs: '100%', md: 400 },
                  height: { xs: 200, md: 500 },
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/cat2.jpg"
                  alt="Image 3"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 400px"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    background: 'linear-gradient(to bottom, #111010 0%, rgba(17,16,16,0.7) 37%, rgba(17,16,16,0) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    p: 3,
                    zIndex: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      mt: 1,
                    }}
                  >
                    Bedroom
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      maxWidth: 250,
                    }}
                  >
                    Cozy beds, wardrobes, and bedroom accessories.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  width: { xs: '100%', md: 400 },
                  height: { xs: 200, md: 500 },
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/cat3.jpg"
                  alt="Image 3"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 400px"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    background: 'linear-gradient(to bottom, #111010 0%, rgba(17,16,16,0.7) 37%, rgba(17,16,16,0) 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    p: 3,
                    zIndex: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      mt: 1,
                    }}
                  >
                    Kitchen
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      maxWidth: 250,
                    }}
                  >
                    Stylish kitchenware and modern appliances.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            alignItems: 'center',
            px: { xs: 2, md: 6 },
            mb: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FilterListIcon color="primary" />
            <Typography variant="body1">Filter</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SortIcon color="primary" />
            <Typography variant="body1">Sort By</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SearchIcon color="primary" />
            <Typography variant="body1">Search</Typography>
          </Box>
        </Box>
      </Stack>
    </ClientThemeProvider>
  );
}