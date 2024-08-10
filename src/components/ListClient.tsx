import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const listClientImage = [
  "./client-assets/ajinomoto-logo.png",
  "./client-assets/nissin-logo.png",
  "./client-assets/sariroti-logo.png",
  "./client-assets/jco-logo.png",
  "./client-assets/mi-burung-dara-logo.png",
  "./client-assets/pizza-hut-logo.png",
  "./client-assets/marugame-udon-logo.png",
];

export default function ListClient() {
  return (
    <>
      <Box
        sx={{
          padding: "32px 0px",
          backgroundColor: "#FFFBF0",
        }}
      >
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Our Client Trust
        </Typography>
        <Marquee autoFill>
          {listClientImage.map((image, index) => (
            <img
              src={image}
              key={index}
              alt="client-logo"
              style={{ width: "60%" }}
            />
          ))}
        </Marquee>
      </Box>
    </>
  );
}
