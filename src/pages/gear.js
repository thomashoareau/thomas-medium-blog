import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import BackpackIcon from "@mui/icons-material/Backpack"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Alert from "@mui/material/Alert"
import Chip from "@mui/material/Chip"
import MuiLink from "@mui/material/Link"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"

const gear = {
  "MacBook Pro Laptop 13-inch": {
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/61bX2AoGj2L._AC_SL1500_.jpg",
    desc: "Sleek, high-performance, offering exceptional computing power and user experience for professionals and creatives alike.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3Kpq7wx",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      }
    }
  },
  "Logitech MX Master 3S Mouse": {
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SL1500_.jpg",
    desc: "Ergonomic and comfortable to be used for all day use, love the scrolling! Great DPI capability and easy software to config with.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/41eloVb",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      }
    }
  },
  "Logitech MX Keys Keyboard": {
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/71pHmXuQ3aL._AC_SL1500_.jpg",
    desc: "Experience ergonomic comfort and premium typing with smart illumination, ensuring improved productivity - guaranteed!",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/43hPKIh",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      }
    }
  },
  "SAMSUNG 32in M80B UHD HDR Smart Computer Monitor Screen": {
    category: "Desk Setup",
    image: "https://m.media-amazon.com/images/I/619GhhC0bIL._AC_SL1000_.jpg",
    desc: "A 3840 x 2160 IPS Display, great for multitasking. Could be used as a TV if needed.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3o29a3C",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      }
    }
  },
  "Sony Alpha 7 III Full-Frame Mirorless Camera": {
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/81zewshg2eL._AC_SL1500_.jpg",
    desc: "Versatile full-frame mirrorless camera, great autofocus capabilities, and interchangeable lenses.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/41bCO4S",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      }
    }
  },
  "Tamron Camera Lens 28-200 F/2.8-5.6": {
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/61ovKBYCtuL._AC_SL1500_.jpg",
    desc: "A versatile black zoom lens for Sony E-mount cameras, offering remarkable performance in a compact design.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/3ZSYQZe",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      }
    }
  },
  "Brevite Jumper laptop and camera bag": {
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/51ER+ZLvPtL._AC_SL1500_.jpg",
    desc: "Compact Camera Backpack - Minimalist & Travel-friendly. Designed for someone who need to carry their laptops and camera gear with them.",
    stores: {
      amazon: {
        affiliateLink: "https://amzn.to/40SAik5",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      }
    }
  }
}

const GearPage = ({ data, location }) => {
  const categories = Object.keys(gear).reduce((acc, key) => {
    const category = gear[key].category
    if (!acc.includes(category)) {
      acc.push(category)
    }
    return acc
  }, [])

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
            <BackpackIcon fontSize="small" />
          </IconButton>
          {"Thomas's Gear"}
        </Box>
      }
    >
      <Seo title={"My Gear"} />
      <Container
        maxWidth="string"
        disableGutters
        sx={{
          maxWidth: "692px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          "@media (max-width: 600px)": {
            gap: "1.5rem",
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
            value={1}
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
        <Alert
          severity="info"
          sx={{
            backgroundColor: "primary.light",
            color: "primary.dark",
            "& .MuiSvgIcon-root": { color: "primary.dark" },
          }}
          icon={"🧐"}
        >
          This is a list of the gear I actually own and recommend. The affiliate
          links come at no extra cost but it does however help support my
          content creation!
        </Alert>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {categories.map(category => (
            <Accordion
            defaultExpanded
              elevation={0}
              sx={{
                "& .MuiButtonBase-root.MuiAccordionSummary-root, .MuiAccordionDetails-root":
                  { padding: 0 }
              }}
            >
              <AccordionSummary
                id={category + "-header"}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                sx={{
                  "& .MuiAccordionSummary-content": {
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  },
                }}
              >
                <MuiLink
                  variant="h6"
                  underline="none"
                  sx={{
                    color: "text.primary",
                    fontWeight: "500",
                  }}
                  component="a"
                  href={"#" + category}
                >
                  {category}
                </MuiLink>
                <Chip
                  disabled
                  size="small"
                  label={
                    Object.keys(gear).filter(
                      key => gear[key].category === category
                    ).length > 1
                      ? `${
                          Object.keys(gear).filter(
                            key => gear[key].category === category
                          ).length
                        } items`
                      : `${
                          Object.keys(gear).filter(
                            key => gear[key].category === category
                          ).length
                        } item`
                  }
                />
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {Object.keys(gear).filter(key => gear[key].category === category).map(key => {
                    const item = gear[key]
                      return (
                        <Grid item xs={12} sm={6} md={4} key={key}>
                          <Card
                            variant="outlined"
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              "@media (max-width: 600px)": {
                                flexDirection: "row",
                              },
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={item.image}
                              alt="green iguana"
                              height={160}
                              width={160}
                              sx={{
                                objectFit: "contain",
                                padding: 1,
                                height: "160px !important",
                                width: "160px !important",
                                "@media (max-width: 600px)": {
                                  height: "120px !important",
                                  width: "120px !important",
                                },
                              }}
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                sx={{
                                  fontWeight: "700",
                                  lineHeight: "22px",
                                  fontSize: "18px !important",
                                  letterSpacing: "0",
                                  color: "text.primary",
                                  transition: "color 0.2s ease-in-out",
                                  "@media (max-width: 600px)": {
                                    fontSize: "16px !important",
                                  },
                                }}
                              >
                                {key}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {item.desc}
                              </Typography>
                              <Box sx={{ textAlign: "center", mt: 2 }}>
                                <Typography
                                  variant="caption"
                                  color="text.disabled"
                                >
                                  Buy it on
                                </Typography>
                              </Box>
                              <CardActions
                                sx={{
                                  p: 0,
                                  justifyContent: "center",
                                  flexWrap: "wrap",
                                  rowGap: "6px",
                                }}
                              >
                                {Object.keys(item.stores).map(key => {
                                  const store = item.stores[key]
                                  return (
                                    <Button
                                      key={key}
                                      variant="outlined"
                                      fullWidth
                                      sx={{
                                        height: "28px",
                                        borderColor: "divider",
                                      }}
                                      href={store.affiliateLink}
                                      target="_blank"
                                    >
                                      <img
                                        src={store.icon}
                                        alt={key}
                                        style={{
                                          objectFit: "contain",
                                          backgroundPosition: "center center",
                                          backgroundSize: "contain",
                                          backgroundRepeat: "no-repeat",
                                          height: "100%",
                                        }}
                                      />
                                    </Button>
                                  )
                                })}
                              </CardActions>
                            </CardContent>
                          </Card>
                        </Grid>
                      )
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Layout>
  )
}

export default GearPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
