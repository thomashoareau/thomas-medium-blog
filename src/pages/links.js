import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import IconButton from "@mui/material/IconButton"
import { HiLink } from "react-icons/hi"

import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"




const profiles = {
  github: {
    name: "GitHub",
    desc: "My open-source projects",
    url: "https://github.com/thomashoareau",
    icon: <FaGithub />,
  },
  linkedin: {
    name: "LinkedIn",
    desc: "My professional profile",
    url: "https://www.linkedin.com/in/thomashoareau/",
    icon: <FaLinkedin />,
  },
  instagram: {
    name: "Instagram",
    desc: "@thomasrhoareau",
    url: "https://www.instagram.com/thomasrhoareau/",
    icon: <FaInstagram />,
  }
}

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout
      location={location}
      title={
        <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          size="small"
          sx={{
            mr: 1,
            backgroundColor: "action.selected",
            color: "text.primary",
          }}
        >
          <HiLink  fontSize={20}/>
        </IconButton>
        {"Thomas Links"}
      </Box>
      }
    >
      <Seo title={"Links"} />
      <Container
        maxWidth="string"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "692px",
          "@media (max-width: 600px)": {
            px: "1.5rem",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="nav tabs example"
            value={2}
            sx={{
              "& .MuiTabs-flexContainer": {
                gap: "1rem",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "text.primary",
                height: "1px",
              },
            }}
          >
            <Tab
              label="Blog"
              active
              component="a"
              href="/"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            <Tab
              label="Gear List"
              active
              component="a"
              href="/gear"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            <Tab
              label="My Links"
              component="a"
              href="/links"
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
          </Tabs>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {Object.keys(profiles).map(key => {
            const profile = profiles[key]
            return (
              <Button
                key={profile.name}
                href={profile.url}
                target="_blank"
                variant="outlined"
                fullWidth
                size="large"
                endIcon={profile.icon}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderColor: "text.disabled",
                  borderRadius: 6,
                  color: "text.primary",
                }}
              >
                {profile.name}
                {profile.desc && (
                  <Typography
                    variant="caption"
                    sx={{ textTransform: "none", color: "text.disabled" }}
                  >
                    {profile.desc}
                  </Typography>
                )}
              </Button>
            )
          })}
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
