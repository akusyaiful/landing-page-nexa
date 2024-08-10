import { Box, Grid, styled, Typography } from "@mui/material";
import CardProduct from "./CardProduct";

const listSuperiorProduct = [
  {
    name: "Tepung Terigu Double Zero",
    images: [
      "./product-assets/double-zero.png",
      "./product-assets/double-zero-2.png",
    ],
  },
  {
    name: "Tepung Terigu Double Zero Putih",
    images: [
      "./product-assets/double-putih.png",
      "./product-assets/double-putih-2.png",
    ],
  },
  {
    name: "Tepung Terigu Beruang Biru",
    images: [
      "./product-assets/beruang-biru.png",
      "./product-assets/beruang-biru-2.png",
    ],
  },
  {
    name: "Tepung Terigu Yokozuna",
    images: [
      "./product-assets/yokozuna.png",
      "./product-assets/yokozuna-2.png",
    ],
  },
];

const Wrapper = styled(Box)(({ theme }) => ({
  width: "75vw",
  margin: "auto",
  padding: "32px 0px",
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
  position: "relative",
}));

const TitleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "32px",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

const SeeAllProduct = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  fontSize: "16px",
  display: "block",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SeeAllProductMobile = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  fontSize: "16px",
  display: "none",
  textAlign: "center",
  marginTop: "32px",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

export default function Product() {
  return (
    <Wrapper>
      <TitleWrapper style={{}}>
        <Typography variant="h4">Our superior product</Typography>
        <SeeAllProduct color="primary">See all product</SeeAllProduct>
      </TitleWrapper>
      <Grid container spacing={5}>
        {listSuperiorProduct.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box sx={{ width: "100%" }}>
              <CardProduct product={product} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <SeeAllProductMobile color="primary">See all product</SeeAllProductMobile>
      <img
        src="./pizza.png"
        alt="pizza"
        style={{ position: "absolute", top: 300, left: -150 }}
      />
      <img
        src="./cheese.png"
        alt="cheese"
        style={{ position: "absolute", top: 400, right: -200 }}
      />
    </Wrapper>
  );
}
