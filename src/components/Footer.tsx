import {
  FacebookRounded,
  Instagram,
  PhoneInTalkOutlined,
  X,
} from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";

const BodyFooter = styled(Box)(({ theme }) => ({
  width: "75vw",
  margin: "auto",
  padding: "32px 0px",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: "90vw",
    flexDirection: "column",
    justifyContent: "unset",
  },
}));

const FooterMenuWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "32px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "16px",
  },
}));
const FooterProfile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginTop: "32px",
  },
}));

const Copyright = styled(Typography)(({ theme }) => ({
  marginTop: "45px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const FooterMenu = styled(Box)({
  display: "grid",
  gap: "16px",
});

const Logo = styled("img")(({ theme }) => ({
  width: "90%",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#012FA6", color: "white" }}>
      <BodyFooter>
        <Box>
          <FooterMenuWrapper>
            <FooterMenu>
              <Typography>Tentang Kami</Typography>
              <Typography>Produk</Typography>
              <Typography>Inspirasi</Typography>
            </FooterMenu>
            <FooterMenu>
              <Typography>Baking & Consulting</Typography>
              <Typography>Pemberdayaan UKM</Typography>
              <Typography>Acara</Typography>
            </FooterMenu>
            <FooterMenu>
              <Typography>Hubungi Kami</Typography>
            </FooterMenu>
          </FooterMenuWrapper>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "32px",
            }}
          >
            <PhoneInTalkOutlined sx={{ width: "50px", height: "50px" }} />
            <Box>
              <Typography>Customer Care</Typography>
              <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
                0-800-140-1109
              </Typography>
            </Box>
          </Box>
        </Box>
        <FooterProfile>
          <Logo src="/logo-sriboga-putih.png" alt="logo-putih" />
          <Box>
            <Typography>Follow Us</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginTop: "8px",
              }}
            >
              <Instagram sx={{ width: "30px", height: "30px" }} />
              <FacebookRounded sx={{ width: "30px", height: "30px" }} />
              <X sx={{ width: "30px", height: "30px" }} />
            </Box>
          </Box>
          <Copyright>&copy; 2024 Develop by NEXA</Copyright>
        </FooterProfile>
      </BodyFooter>
    </Box>
  );
}
