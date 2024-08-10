import { Menu } from "@mui/icons-material";
import { Box, Drawer, styled } from "@mui/material";
import { useState } from "react";

const Logo = styled("img")(({ theme }) => ({
  width: "10%",
  [theme.breakpoints.down("md")]: {
    width: "20%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "40%",
  },
}));

const LogoDrawer = styled("img")(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

const NavbarMenu = styled(Box)(({ theme }) => ({
  padding: "16px 0px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#FFFBF0",
  marginTop: "80px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const HamburgerButton = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    marginLeft: "32px",
  },
}));

const List = styled("li")({
  color: "#1740AC",
  cursor: "pointer",
});

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Box
        sx={{
          padding: "16px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          zIndex: 999,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <HamburgerButton onClick={() => setOpenDrawer(true)}>
          <Menu />
        </HamburgerButton>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Logo src="/logo-sriboga.png" alt="logo-sriboga" />
        </Box>
      </Box>
      <NavbarMenu>
        <ul style={{ display: "flex", listStyle: "none", gap: 16 }}>
          <List>Tentang kami</List>
          <List>Produk</List>
          <List>
            Inspirasi <em>Baking</em>
          </List>
          <List>
            <em>Baking & Consulting</em>
          </List>
          <List>Pemberdayaan UKM</List>
          <List>Acara</List>
          <List>Hubungi Kami</List>
        </ul>
      </NavbarMenu>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ width: "50%" }}
      >
        <Box sx={{ padding: "16px" }}>
          <LogoDrawer src="/logo-sriboga.png" alt="logo-sriboga" />
          <ul
            style={{
              display: "grid",
              listStyle: "none",
              gap: 16,
              marginTop: "32px",
            }}
          >
            <List>Tentang kami</List>
            <List>Produk</List>
            <List>
              Inspirasi <em>Baking</em>
            </List>
            <List>
              <em>Baking & Consulting</em>
            </List>
            <List>Pemberdayaan UKM</List>
            <List>Acara</List>
            <List>Hubungi Kami</List>
          </ul>
        </Box>
      </Drawer>
    </>
  );
}
