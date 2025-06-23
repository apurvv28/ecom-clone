import React from 'react'
import { Box, Button } from '@mui/material'
const Buttons = () => {
  return (
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
  )
}

export default Buttons