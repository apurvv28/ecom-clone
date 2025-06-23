"use client";
import { Stack, useTheme } from "@mui/material";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
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
        <Navbar />
        <HeroSection />
        <CategoriesPage />
        <ResultBar />
        <ProductGrid />
        <Buttons />
        <Offer />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}
