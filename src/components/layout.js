import * as React from "react"
import { Link } from "gatsby"
import useDarkMode from "use-dark-mode"

import BottomNav from "./BottomNav"
import PanelLeft from "./PanelLeft"
import PanelRight from "./PanelRight"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import MuiLink from "@mui/material/Link"

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForkRightIcon from '@mui/icons-material/ForkRight';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { Divider } from "@mui/material"

function ThemeIconButton({ darkModeHook }) {
  return (
    <Tooltip title="Switch theme" placement="right" arrow>
      <IconButton onClick={darkModeHook.toggle}>
        {darkModeHook.value === "dark" ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>
    </Tooltip>
  )
}

const Layout = ({
  location,
  title,
  extraDrawerContent,
  extraFooterContent,
  children,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const darkModeHook = useDarkMode(false)
  const mode = darkModeHook.value === false ? "light" : "dark"

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#6200EE",
                  light: "#6200EE10",
                },
                text: {
                  primary: "#1d1d1f",
                  postBody: "#1d1d1f",
                  disabled: "rgba(0, 0, 0, 0.48)",
                },
                background: {
                  alt: "#fafafa",
                  appBar: "rgba(255,255,255,0.84)",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#E9DAAC",
                  light: "#E9DAAC20",
                },
                text: {
                  primary: "#f5f5f7",
                  postBody: "#C1C1C6",
                  secondary: "#A1A1A6",
                  disabled: "#86868b",
                },
                background: {
                  default: "rgb(18,18,18)",
                  alt: "rgb(22,22,22)",
                  paper: "rgb(24,24,24)",
                  appBar: "rgba(18,18,18,0.84)",
                },
              }),
        },
      }),
    [mode]
  )

  theme = responsiveFontSizes(theme)
  
  // get stars and forks from https://api.github.com/repos/BrianRuizy/gatsby-medium-blog
  const [githubStars, setGithubStars] = React.useState(0)
  const [githubForks, setGithubForks] = React.useState(0)
  React.useEffect(() => {
    fetch("https://api.github.com/repos/BrianRuizy/gatsby-medium-blog")
      .then(res => res.json())
      .then(data => {
        setGithubStars(data.stargazers_count)
        setGithubForks(data.forks_count)
      }
      )
  }, [])


  return (
    <>
      <meta content={theme.palette.background.default} name="theme-color" />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "block" }}>
          <Box sx={{ display: "block", margin: "auto", maxWidth: "1504px" }}>
            <Box sx={{ display: "flex" }} data-is-root-path={isRootPath}>
              <PanelLeft
                isRootPath={isRootPath}
                ThemeButton={<ThemeIconButton darkModeHook={darkModeHook} />}
              />
              <Box sx={{ display: "block", minWidth: 0, flex: "1 1 auto" }}>
                <Container
                  disableGutters
                  maxWidth="string"
                  sx={{
                    maxWidth: "692px",
                    py: "2rem",
                    "@media (max-width: 600px)": {
                      py: "1rem",
                      px: "1.5rem",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      {isRootPath && (
                        <Avatar
                          alt="Thomas Hoareau"
                          src="../picture.jpg"
                          sx={{
                            width: 48,
                            height: 48,
                            backgroundColor: "divider",
                            "@media (min-width: 1080px)": {
                              display: "none",
                            },
                            "@media (max-width: 600px)": {
                              width: 40,
                              height: 40,
                            },
                          }}
                        >
                        TH
                        </Avatar>
                      )}

                      <Typography
                        variant="h4"
                        sx={{
                          lineHeight: "52px",
                          fontWeight: "700",
                          "& > a": {
                            color: "text.primary",
                            textDecoration: "none",
                          },
                          "@media (max-width: 600px)": {
                            fontSize: "22px",
                          },
                        }}
                      >
                        <Link to="/">{title}</Link>
                      </Typography>
                    </Box>

                    {title && (
                      <IconButton sx={{ height: "fit-content" }}>
                        <MoreHorizIcon alt="More" />
                      </IconButton>
                    )}
                  </Box>
                </Container>
                <main style={{ minHeight: "calc((100vh - 360px) - 116px)" }}>
                  {children}
                </main>
                <footer>
                  <Container
                    disableGutters
                    sx={{
                      backgroundColor: "background.alt",
                      py: "4rem",
                      mt: "4rem",
                      pb: "8rem",
                    }}
                  >
                    <Container
                      disableGutters
                      maxWidth="string"
                      sx={{
                        maxWidth: "692px",
                        "@media (max-width: 600px)": {
                          px: "1.5rem",
                        },
                      }}
                    >
                      {extraFooterContent}
                      <Divider sx={{ my: "2rem" }} />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          color: "text.disabled",
                        }}
                      >
                        <MuiLink
                          component={Link}
                          underline="none"
                          sx={{ color: "text.disabled" }}
                          to="https://github.com/BrianRuizy/gatsby-medium-blog"
                          target="_blank"
                        >
                          <Typography
                            variant="body2"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            Gatsby Medium Blog
                            <StarBorderIcon
                              alt="Github stars"
                              sx={{ ml: 0.5, fontSize: "16px" }}
                            />
                            {githubStars}
                            <ForkRightIcon
                              alt="Github forks"
                              sx={{ ml: 0.25, fontSize: "16px" }}
                            />
                            {githubForks}
                          </Typography>
                        </MuiLink>
                        <Typography variant="body2">
                          ©{new Date().getFullYear()}
                          <Box
                            sx={{
                              display: "inline",
                              "@media (max-width: 600px)": {
                                display: "none",
                              },
                            }}
                          >
                            {" "}Built by Thomas Hoareau
                          </Box>
                        </Typography>
                      </Box>
                    </Container>
                  </Container>
                </footer>
              </Box>
              <PanelRight extraDrawerContent={extraDrawerContent} />
            </Box>
          </Box>
          <BottomNav isRootPath={isRootPath} darkModeHook={darkModeHook} />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Layout
