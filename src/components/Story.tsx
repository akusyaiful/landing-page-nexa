import { Box, Grid, styled, Typography } from "@mui/material";

const listStory = [
  {
    name: "Story 1",
    image: "./story-assets/story-1.png",
    date: "14 Januari 2023",
  },
  {
    name: "Story 2",
    image: "./story-assets/story-2.png",
    date: "14 Januari 2023",
  },
];

const Wrapper = styled(Box)(({ theme }) => ({
  width: "75vw",
  margin: "auto",
  padding: "64px 0px",
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
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

export default function Story() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Typography variant="h4">Our Newest Story</Typography>
        <SeeAllProduct color="primary">See all product</SeeAllProduct>
      </TitleWrapper>
      <Box>
        <Grid container spacing={5}>
          {listStory.map((story, index) => (
            <Grid item xs={12} md={6} key={index}>
              <img
                src={story.image}
                style={{ width: "100%", borderRadius: "12px" }}
              />
              <Typography sx={{ fontSize: "20px", marginTop: "24px" }}>
                {story.name}
              </Typography>
              <Typography sx={{ fontSize: "16px", marginTop: "32px" }}>
                {story.date}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <SeeAllProductMobile color="primary">See all product</SeeAllProductMobile>
    </Wrapper>
  );
}
