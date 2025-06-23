"use client";
import {
  Stack,
  Typography,
  Box,
  IconButton,
  Button,
  useTheme,
  Container,
} from "@mui/material";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Image from "next/image";
import { ThemeProvider } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef } from "react";
import ProductGrid from "./components/ProductGrid";
import Offer from "./components/Offer";
import ResultBar from "./components/ResultBar";

const categories = [
  {
    title: "CATEGORIES",
    description: "Browse our collection of products and services",
    image: "/cat0.jpg",
  },
  {
    title: "Living Room",
    description: "Modern and classic living room furniture",
    image: "/cat1.jpg",
  },
  {
    title: "Bedroom",
    description: "Cozy beds and bedroom accessories",
    image: "/cat2.jpg",
  },
  {
    title: "Kitchen",
    description: "Stylish kitchenware and appliances",
    image: "/cat3.jpg",
  },
  {
    title: "Office",
    description: "Ergonomic workspace solutions",
    image: "/cat4.jpg",
  },
  {
    title: "Outdoor",
    description: "Durable outdoor furniture",
    image: "/cat5.jpg",
  },
];

const CategoryCard = ({ title, description, image, bgColor, isTextOnly }) => (
  <Box
    sx={{
      width: { xs: "280px", sm: "320px", md: "360px" },
      height: { xs: "200px", md: "400px" },
      position: "relative",
      borderRadius: 2,
      overflow: "hidden",
      bgcolor: bgColor || "transparent",
      color: "white",
      p: 3,
      flexShrink: 0,
    }}
  >
    {image && (
      <>
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)",
          }}
        />
      </>
    )}

    <Box sx={{ position: "relative", zIndex: 1 }}>
      <Typography variant={isTextOnly ? "h5" : "h6"} fontWeight="bold" mb={1}>
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  </Box>
);

export default function Home() {
  const scrollRef = useRef(null);
  const theme = useTheme();
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ minHeight: "100vh" }}>
        <Navbar />
        <Container
          maxWidth="sm"
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
            marginTop: "-16px",
          }}
        >
          <Image
            src="/hero.png"
            alt="hero"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
            priority
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              textAlign: "left",
              px: 2,
              py: 4,
            }}
          >
            <Typography
              variant="h2"
              color="black"
              sx={{
                fontWeight: 700,
                mb: 2,

                pl: { xs: 2, md: 10 },
              }}
            >
              CATALOG
            </Typography>
            <Typography
              variant="body1"
              color="black"
              sx={{
                maxWidth: 600,
                pl: { xs: 2, md: 10 },
              }}
            >
              Discover our exclusive collection of products and services
              tailored for your needs. Explore the latest trends and find your
              perfect match in our catalog.
            </Typography>
          </Box>
        </Container>
        <Box sx={{ px: 2, py: 4, position: "relative" }}>
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              py: 1,
            }}
          >
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </Box>

          <IconButton
            onClick={() => scroll("left")}
            sx={{
              display: { xs: "none", sm: "flex" },
              position: "absolute",
              left: 10,
              top: "50%",
              bgcolor: "background.paper",
              boxShadow: 1,
              "&:hover": { bgcolor: "grey.100" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            onClick={() => scroll("right")}
            sx={{
              display: { xs: "none", sm: "flex" },
              position: "absolute",
              right: 10,
              top: "50%",
              bgcolor: "background.paper",
              boxShadow: 1,
              "&:hover": { bgcolor: "grey.100" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
          <ResultBar/>
        
        <ProductGrid />
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
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
            LOAD MORE
          </Button>
        </Box>

        <Offer />

        <Footer />
      </Stack>
    </ThemeProvider>
  );
}
