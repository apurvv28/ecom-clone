import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'

const HeroSection = () => {
  return (
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
        mt: "-16px",
      }}
    >
      <Image
        src="/hero.png"
        alt="hero"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        priority
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "#fff",
            fontSize: { xs: 32, sm: 48, md: 56 },
            lineHeight: 1.1,
            textAlign: "left",
            
          }}
        >
          CATALOG
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            opacity: 0.85,
            maxWidth: 800,
            textAlign: "left",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
          Lorem Ipsum has been the industrys standard dummy text.
        </Typography>
      </Container>
    </Box>
  )
}

export default HeroSection