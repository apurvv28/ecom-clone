import React from 'react'
import { Box, Button } from '@mui/material'
const Buttons = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Button
            variant="contained"
            sx={{
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