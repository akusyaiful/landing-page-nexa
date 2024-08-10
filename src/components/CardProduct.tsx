import { Box, Button, styled, Typography } from "@mui/material";

interface CardProductProps {
  product: {
    name: string;
    images: string[];
  };
}

const Card = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "320px",
  overflow: "hidden",
  borderRadius: "12px",
  transition: "transform 0.3s ease",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    height: "500px", // Full width on smaller screens
  },
}));

const DefaultImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px",
  transition: "opacity 0.3s ease",
});

const HoverImage = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity: 0,
  borderRadius: "12px",
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 1,
  },
});

export default function CardProduct(props: CardProductProps) {
  const { product } = props;

  return (
    <Box>
      <Card>
        <DefaultImage src={product.images[0]} alt="Default" />
        <HoverImage src={product.images[1]} alt="On Hover" />
      </Card>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            textAlign: "center",
            margin: "20px 0px",
            minHeight: { md: "60px", sm: "unset" },
          }}
        >
          {product.name}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          sx={{ fontSize: "16px", padding: "4px 30px", textAlign: "center" }}
        >
          See product{" "}
        </Button>
      </Box>
    </Box>
  );
}
