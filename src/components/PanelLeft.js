import * as React from "react"
import { Link } from "gatsby"

import ContactDrawer from "./ContactDrawer"
import SearchDialog from "./search/search-dialog"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined"
import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SearchIcon from "@mui/icons-material/Search"

export default function RightDrawer({ isRootPath, ThemeButton }) {
  const [state, setState] = React.useState({
    bottom: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        width: "80px",
        borderRight: "1px solid",
        borderColor: "divider",
        padding: "2.5rem 0",
        position: "sticky",
        top: 0,
        "@media (max-width: 1080px)": {
          display: "none",
        },
      }}
    >
      <Box>
        <IconButton
          sx={{ color: "text.primary" }}
          size="small"
          component={Link}
          to="/"
        >
        <svg xmlns="http://www.w3.org/2000/svg" 
          width="50"
          height="50"
          zoomAndPan="magnify"
          viewBox="0 0 37.5 37.499999"
          preserveAspectRatio="xMidYMid meet"
          version="1.2">
          <defs>
            <clipPath id="1268733c3f">
              <path d="M 11.25 14.15625 L 26.25 14.15625 L 26.25 23.15625 L 11.25 23.15625 Z M 11.25 14.15625 " clip-rule="nonzero"/>
            </clipPath>
          </defs>
          <g clip-path="url(#1268733c3f)">
            <path fill="currentColor" d="M 26.25 14.15625 L 16.539062 14.15625 C 16.503906 14.214844 16.492188 14.328125 16.425781 14.542969 C 16.296875 14.988281 16.183594 15.4375 16.054688 15.917969 L 19.941406 15.917969 C 19.65625 16.910156 19.574219 17.214844 19.5 17.523438 C 19.488281 17.585938 19.46875 17.632812 19.441406 17.671875 L 19.414062 17.769531 C 17.792969 17.765625 16.566406 17.765625 14.617188 17.765625 L 14.824219 17 L 15.597656 14.15625 L 13.667969 14.15625 C 13.636719 14.191406 13.613281 14.234375 13.597656 14.300781 C 13.523438 14.570312 13.453125 14.839844 13.378906 15.109375 L 13.378906 15.117188 L 11.25 23.152344 L 13.15625 23.152344 L 13.625 21.425781 L 14.078125 19.753906 L 14.113281 19.625 C 16.050781 19.628906 17.289062 19.625 18.910156 19.625 L 18.902344 19.652344 L 17.949219 23.152344 L 19.90625 23.152344 C 19.917969 23.128906 19.925781 23.105469 19.933594 23.074219 C 20.222656 21.992188 20.527344 20.914062 20.816406 19.835938 C 20.828125 19.789062 20.84375 19.753906 20.859375 19.722656 L 21.390625 17.765625 L 21.386719 17.765625 C 21.449219 17.527344 21.515625 17.292969 21.578125 17.066406 C 21.652344 16.808594 21.722656 16.550781 21.789062 16.296875 C 21.789062 16.289062 21.792969 16.28125 21.898438 15.917969 L 25.773438 15.917969 C 25.933594 15.324219 26.089844 14.742188 26.25 14.15625 Z M 26.25 14.15625 " fill-opacity="1" fill-rule="nonzero"/>
          </g>
        </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 375 375"
          version="1.2">
          <defs>
            <clipPath id="95557d9857">
              <path d="M 145.03125 140 L 229.78125 140 L 229.78125 231 L 145.03125 231 Z M 145.03125 140 " clip-rule="nonzero" />
            </clipPath>
            <clipPath id="75bd0777ab">
              <path d="M 145.03125 103.054688 L 229.78125 103.054688 L 229.78125 168 L 145.03125 168 Z M 145.03125 103.054688 " clip-rule="nonzero" />
            </clipPath>
          </defs>
          <g clip-path="url(#95557d9857)">
            <path fill="currentColor" d="M 160.242188 196.757812 C 160.242188 207.789062 160.242188 218.707031 160.242188 230.121094 C 159.414062 229.355469 158.960938 228.988281 158.570312 228.566406 C 154.433594 224.03125 150.277344 219.511719 146.21875 214.910156 C 145.582031 214.183594 145.082031 213.042969 145.078125 212.089844 C 145.019531 188.429688 145.03125 164.769531 145.035156 141.113281 C 145.035156 140.886719 145.101562 140.660156 145.160156 140.242188 C 149.855469 141.316406 154.527344 142.316406 159.132812 143.535156 C 159.679688 143.679688 160.203125 145.074219 160.214844 145.890625 C 160.285156 156.027344 160.261719 166.167969 160.261719 176.308594 C 160.261719 177.136719 160.261719 177.960938 160.261719 178.941406 C 178.558594 178.941406 196.605469 178.941406 214.96875 178.941406 C 215.007812 178.113281 215.082031 177.234375 215.082031 176.355469 C 215.089844 166.292969 215.152344 156.226562 215.039062 146.167969 C 215.015625 144.035156 215.765625 143.125 217.746094 142.738281 C 221.628906 141.980469 225.492188 141.089844 229.59375 140.203125 C 229.632812 140.820312 229.722656 141.617188 229.722656 142.410156 C 229.726562 165.839844 229.703125 189.273438 229.746094 212.699219 C 229.75 214.359375 229.296875 215.578125 228.160156 216.789062 C 224.324219 220.867188 220.59375 225.046875 216.832031 229.203125 C 216.429688 229.648438 216.128906 230.183594 215.777344 230.679688 C 215.574219 230.570312 215.371094 230.457031 215.167969 230.351562 C 215.167969 219.199219 215.167969 208.050781 215.167969 196.757812 C 196.765625 196.757812 178.65625 196.757812 160.242188 196.757812 Z M 160.242188 196.757812 " fill-opacity="1" fill-rule="nonzero" />
          </g>
          <g clip-path="url(#75bd0777ab)">
            <path fill="currentColor" d="M 145.148438 122.410156 C 145.148438 116.109375 145.148438 110 145.148438 103.4375 C 173.347656 115.046875 201.414062 114.996094 229.703125 103.164062 C 229.703125 109.59375 229.730469 115.40625 229.652344 121.214844 C 229.648438 121.671875 228.957031 122.378906 228.453125 122.535156 C 219.296875 125.359375 210.046875 127.820312 200.476562 128.746094 C 196.886719 129.09375 195.890625 130.035156 195.890625 133.847656 C 195.890625 144.132812 195.90625 154.421875 195.914062 164.703125 C 195.914062 165.609375 195.914062 166.511719 195.914062 167.546875 C 190.136719 167.546875 184.65625 167.546875 178.789062 167.546875 C 178.789062 166.597656 178.785156 165.710938 178.789062 164.820312 C 178.820312 154.765625 178.839844 144.710938 178.882812 134.652344 C 178.902344 130.351562 177.980469 129.09375 173.71875 128.664062 C 164.992188 127.789062 156.484375 125.972656 148.121094 123.386719 C 147.171875 123.097656 146.234375 122.769531 145.148438 122.410156 Z M 145.148438 122.410156 " fill-opacity="1" fill-rule="nonzero" />
          </g>
          <path fill="currentColor" d="M 179.070312 208.824219 C 184.617188 208.824219 190.089844 208.824219 195.789062 208.824219 C 195.839844 209.703125 195.925781 210.515625 195.925781 211.335938 C 195.933594 221.304688 195.980469 231.277344 195.867188 241.242188 C 195.855469 242.464844 195.222656 243.886719 194.4375 244.855469 C 192.21875 247.578125 189.769531 250.113281 187.214844 252.933594 C 184.472656 249.882812 181.8125 246.964844 179.214844 243.992188 C 178.910156 243.644531 178.847656 242.992188 178.847656 242.480469 C 178.832031 231.671875 178.835938 220.855469 178.851562 210.042969 C 178.859375 209.675781 178.984375 209.308594 179.070312 208.824219 Z M 179.070312 208.824219 " fill-opacity="1" fill-rule="nonzero" />
        </svg> */}
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Tooltip title="Home" placement="right" arrow>
          <IconButton component={Link} to="/">
            {isRootPath ? (
              <HomeIcon sx={{ color: "text.primary" }} />
            ) : (
              <HomeOutlinedIcon />
            )}
          </IconButton>
        </Tooltip>
        <React.Fragment>
          <Tooltip title="Search" placement="right" arrow>
            <IconButton onClick={handleClickOpen}>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <SearchDialog
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
          />
        </React.Fragment>
        <React.Fragment>
          <Tooltip title="Contact" placement="right" arrow>
            <IconButton onClick={toggleDrawer("bottom", true)}>
              <AlternateEmailOutlinedIcon />
            </IconButton>
          </Tooltip>
          <ContactDrawer
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
          />
        </React.Fragment>
        {ThemeButton}
      </Box>
      <Box>
        <Avatar
          alt="Thomas Hoareau"
          src="../picture.jpg"
          sx={{ width: 32, height: 32, backgroundColor: "divider" }}
        >
          TH
        </Avatar>
      </Box>
    </Box>
  )
}
