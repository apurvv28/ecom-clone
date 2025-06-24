import React from "react";
import { Box, Typography, Button, IconButton, Container } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ResultBar = () => (
  <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2, md: 0 } }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "stretch", sm: "center" },
        gap: { xs: 2, sm: 0 },
        background: "#fff",
        width: "100%",
        py: { xs: 1.5, sm: 2 },
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: 15, sm: 16 },
          mb: { xs: 1, sm: 0 },
          color: "grey.600"
        }}
      >
        Showing 8 out of 22 results
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: { xs: 0, sm: 0.5 },
          flexWrap: "wrap",
          width: { xs: "100%", sm: "auto" },
          justifyContent: { xs: "flex-start", sm: "flex-end" },
          alignItems: "center",
        }}
      >
        <Button
          variant="text"
          color="inherit"
          endIcon={<TuneIcon />}
          sx={{
            px: { xs: 1, sm: 2 },
            fontWeight: 300
          }}
        >
          Filter
        </Button>
        <Button
          variant="text"
          color="inherit"
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            textTransform: "none",
            minWidth: { xs: 0, sm: 64 },
            px: { xs: 1, sm: 2 },
            fontSize: { xs: 13, sm: 15 },
          }}
        >
          Sort By Price
        </Button>
        <IconButton color="inherit" >
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" >
          <ViewColumnIcon />
        </IconButton>
        <IconButton color="inherit" >
          <ViewListIcon />
        </IconButton>
        <IconButton color="inherit" >
          <ViewModuleIcon />
        </IconButton>
        <IconButton color="inherit" >
          <ViewQuiltIcon />
        </IconButton>
      </Box>
    </Box>
  </Container>
);

export default ResultBar;