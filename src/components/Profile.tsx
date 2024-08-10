import { Box, Button, styled, Typography } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => ({
  width: "75vw",
  margin: "auto",
  padding: "32px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "64px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "90vw",
  },
}));

export default function Profile() {
  return (
    <Wrapper>
      <Box sx={{ width: { md: "40%", sm: "100%" } }}>
        <Typography variant="h4">Pioneer in Flour Innovation</Typography>
        <Typography sx={{ margin: "32px 0px", fontSize: "16px" }}>
          PT. Sriboga Raturaya berdiri pada tahun 1995. Pada tahun 2011 berubah
          menjadi PT. Sriboga Flour Mill sebagai pelopor Produsen Tepung Terigu
          yang memiliki gizi tinggi di Indonesia.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          sx={{ fontSize: "16px", padding: "4px 30px" }}
        >
          Learn more
        </Button>
      </Box>
      <Box sx={{ width: { md: "60%", sm: "100%" } }}>
        <img
          src="/pabrik-sriboga.webp"
          alt="pabrik-sriboga"
          style={{ width: "100%" }}
        />
      </Box>
    </Wrapper>
  );
}
