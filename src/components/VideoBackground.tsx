import React from "react";
import { Box, Typography, Button } from "@mui/material";

const VideoBackground = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "500px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 139, 0.5)",
          padding: "20px",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          From us to your favorite dish
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "20px", width: "400px" }}
        >
          We’re passionate about feeding the ones we love delicious dishes made
          from the highest quality ingredients. Get inspired for your next meal
          or baking project by browsing through our library of original recipes
          featuring our ancient and heritage grains.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            borderColor: "#fff",
            color: "#fff",
            "&:hover": {
              borderColor: "#fff",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          Discover recipes
        </Button>
        <img
          src="./inspirasi-bakery.png"
          alt="inspirasi-bakery"
          width="80px"
          style={{ marginTop: "16px" }}
        />
      </Box>
    </Box>
  );
};

export default VideoBackground;
