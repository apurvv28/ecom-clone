"use client";
import { Stack, useTheme, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ProductGrid from "./components/ProductGrid";
import Offer from "./components/Offer";
import ResultBar from "./components/ResultBar";
import CategoriesPage from "./components/Categories";
import HeroSection from "./components/HeroSection";
import Buttons from "./components/Buttons";

export default function Home() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <HeroSection />
        <CategoriesPage />
        <ResultBar />
        <ProductGrid />
        <Buttons />
        <Grid
          sx={{
            backgroundImage: "url('/Vector4.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: { xs: 4, md: 8 },
            px: { xs: 2, md: 6 },
          }}
        >
          <Offer />
        </Grid>
      </Stack>
    </ThemeProvider>
  );
}
