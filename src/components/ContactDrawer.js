import * as React from "react"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"
import Link from "@mui/material/Link"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"

export default function ContactDrawer(props) {
  return (
    <Drawer
      anchor={"bottom"}
      open={props.open}
      onClose={props.onClose}
      PaperProps={{ elevation: 0 }}
      sx={{
        backdropFilter: "blur(4px)",
      }}
    >
      <Container maxWidth="sm">
        <form
          action="https://getform.io/f/60ee0fc4-f072-4b23-a814-669eae126ee2"
          method="POST"
        >
          <Box
            sx={{
              my: "2rem",
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ mb: "1.5rem" }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                Reach out anytime! 👋
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: "360px",
                  lineHeight: "1.43",
                }}
              >
                Have any questions, feedback or want to say hi? Fill the form,
                or{" "}
                <Link href="mailto:thomas.hoareaupro@gmail.com" color={"inherit"}>
                  email me
                </Link>{" "}
                whenever convenient.
              </Typography>
            </Box>
            <TextField
              id="outlined-name"
              label="Name"
              variant="outlined"
              name="name"
              type={"text"}
            />
            <TextField
              id="outlined-email"
              label="Email"
              variant="outlined"
              name="email"
              type={"email"}
              required
            />
            <TextField
              id="outlined-message"
              label="Message"
              variant="outlined"
              placeholder="Something nice 😅"
              name="message"
              type={"text"}
              required
              multiline
              rows={3}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disableElevation
              type="submit"
              sx={{
                backgroundColor: "text.primary",
                color: "background.alt",
                textTransform: "none",
                fontWeight: 400,
              }}
            >
              Send
            </Button>
          </Box>
        </form>
      </Container>
    </Drawer>
  )
}
