import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { CloseOutlined, PermIdentityOutlined } from "@mui/icons-material";
import { IconButton, Skeleton, Typography } from "@mui/material";

export default function JoinUs() {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <Box>
      {showDialog && (
        <Box
          sx={{
            position: "fixed",
            zIndex: 999,
            bottom: "100px",
            right: "20px",
          }}
        >
          <Box
            sx={{
              borderRadius: "12px 12px 0px 0px",
              backgroundColor: "#012FA6",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "4px 16px",
            }}
          >
            <Typography sx={{ fontSize: "14px", color: "white" }}>
              Terhubunglah dengan kami
            </Typography>
            <IconButton onClick={() => setShowDialog(false)}>
              <CloseOutlined sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              borderRadius: "0px 0px 12px 12px",
              backgroundColor: "white",
              display: "grid",
              gap: "8px",
              padding: "16px",
              boxShadow: "0 4px 2px -2px gray",
            }}
          >
            <Skeleton variant="rounded" width={230} height={25} />
            <Skeleton variant="rounded" width={230} height={25} />
            <Skeleton variant="rounded" width={230} height={25} />
            <Skeleton variant="rounded" width={230} height={25} />
            <Skeleton variant="rounded" width={230} height={25} />
            <Skeleton variant="rounded" width={230} height={25} />
          </Box>
        </Box>
      )}
      {!showDialog && (
        <Box
          sx={{ position: "fixed", zIndex: 999, bottom: "20px", right: "20px" }}
        >
          <Fab
            size="large"
            aria-label="add"
            sx={{
              background:
                "linear-gradient(138deg, rgba(2,0,36,1) 0%, rgba(11,9,121,1) 0%, rgba(0,212,255,1) 100%)",
            }}
            onClick={() => setShowDialog(true)}
          >
            <PermIdentityOutlined sx={{ color: "white" }} />
          </Fab>
        </Box>
      )}
    </Box>
  );
}
