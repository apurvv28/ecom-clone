import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Container, Menu, MenuItem } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ResultBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const iconButtons = (
    <>
      <IconButton color="inherit">
        <ViewColumnIcon />
      </IconButton>
      <IconButton color="inherit">
        <ViewListIcon />
      </IconButton>
      <IconButton color="inherit">
        <ViewModuleIcon />
      </IconButton>
      <IconButton color="inherit">
        <ViewQuiltIcon />
      </IconButton>
    </>
  );

  return (
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
          ml: { xs: 1, sm: 0, md: 0, lg: 0 },
          mr: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: 15, sm: 16 },
            mb: { xs: 1, sm: 0 },
            pl: { xs: 1, sm: 0 },
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
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              width: { xs: "100%", sm: "auto" },
              justifyContent: { xs: "flex-start", sm: "flex-end" },
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
            
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: "auto",
              ...(isMobile && {
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                paddingRight: 1
              }),
            }}
          >
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
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            {isMobile ? (
              <>
                <IconButton color="inherit" onClick={handleMenuOpen}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <ViewColumnIcon sx={{ mr: 1 }} /> Column
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <ViewListIcon sx={{ mr: 1 }} /> List
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <ViewModuleIcon sx={{ mr: 1 }} /> Module
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <ViewQuiltIcon sx={{ mr: 1 }} /> Quilt
                  </MenuItem>
                </Menu>
              </>
            ) : (
              iconButtons
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ResultBar;