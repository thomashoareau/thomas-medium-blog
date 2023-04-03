import * as React from "react"
import { useState, useEffect } from "react";

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// Utilities
import kebabCase from "lodash/kebabCase"
import { Provider, ClapButton } from "@lyket/react"

// local components
import Layout from "../components/layout"
import shortcodes from "../components/MdxComponents"
import Seo from "../components/seo"
import Post from "../templates/post"
import ProgressAppBar from "../components/ProgressAppBar";

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"

import LinkIcon from "@mui/icons-material/Link"

const ClampTypography = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  lineClamp: "2",
  WebkitBoxOrient: "vertical",
}

function PostTags(props) {
  const tags = props.data
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "text.primary",
          fontSize: "16px !important",
          letterSpacing: 0,
          fontWeight: "500",
          lineHeight: "20px",
        }}
      >
        Topics
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tags.map(tag => (
          <Chip
            key={tag}
            component={Link}
            to={`/tag/${kebabCase(tag)}/`}
            label={tag}
            clickable
          />
        ))}
      </Box>
    </Box>
  )
}

function MoreStories(props) {
  const { previous, next } = props.data

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "text.primary",
          fontSize: "16px !important",
          letterSpacing: 0,
          fontWeight: "500",
          lineHeight: "20px",
        }}
      >
        More stories
      </Typography>
      <Stack spacing={3}>
        {[next, previous].map(item => {
          if (!item) return null
          return (
            <Box
              key={item.fields.slug}
              component={Link}
              to={item.fields.slug}
              rel={item}
              sx={{
                textDecoration: "none",
                color: "unset",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  gutterBottom
                >
                  {`${item.frontmatter.date} • ${item.timeToRead}`} min read
                </Typography>
                <Typography
                  variant="body1"
                  style={ClampTypography}
                  sx={{
                    color: "text.primary",
                    fontWeight: "700",
                    lineHeight: "20px",
                    letterSpacing: "0",
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {" "}
                  {item.frontmatter.title}
                </Typography>
              </Box>
              <Box sx={{ width: "100%", maxWidth: "55px" }}>
                <GatsbyImage
                  image={getImage(item.frontmatter.featuredImage)}
                  alt={item.frontmatter.featuredImage.name}
                  style={{ borderRadius: "4px", aspectRatio: 1 }}
                />
              </Box>
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}

const PostDetailTemplate = ({ data, location }) => {
  const post = data.mdx
  const image = getImage(post.frontmatter.featuredImage)
  const tags = post.frontmatter.tags

  const [open, setOpen] = React.useState(false)

  const handleTooltipOpen = () => {
    setOpen(true)
    navigator.clipboard.writeText(`https://b-r.io${location.pathname}`)
    setTimeout(() => {
      setOpen(false)
    }, 700)
  }

   //Width State
   const [width, setWidth] = useState(0)
   // scroll function
   const scrollHeight = () => {
     var el = document.documentElement,
       ScrollTop = el.scrollTop || document.body.scrollTop,
       ScrollHeight = el.scrollHeight || document.body.scrollHeight
     var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100
     // store percentage in state
     setWidth(percent)
   }

   //useEffect to control the component lifecycle
   useEffect(() => {
     window.addEventListener("scroll", scrollHeight)
     return () => window.removeEventListener("scroll", scrollHeight)
   })

  return (
    <Layout
      location={location}
      title={""}
      extraDrawerContent={
        <>
          <PostTags data={tags} />
          <MoreStories data={data} />
        </>
      }
      extraFooterContent={
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            pt: "4rem",
          }}
        >
          {data.next && <Divider />}
          {data.next && <Post data={data.next} />}
          {data.previous && <Divider />}
          {data.previous && <Post data={data.previous} />}
        </Box>
      }
    >
      <ProgressAppBar text={post.frontmatter.title} percent={width}/>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">

        <Container
          maxWidth="string"
          disableGutters
          sx={{
            maxWidth: "692px",
            "@media (max-width: 600px)": {
              px: "1.5rem",
            },
          }}
        >
          <header>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Avatar
                  alt="Thomas Hoareau"
                  src="../picture.jpg"
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "divider",
                    "@media (max-width: 900px)": {
                      width: 40,
                      height: 40,
                    },
                  }}
                >
                  BR
                </Avatar>
                <Stack>
                  <Typography variant="body1">Thomas Hoareau</Typography>
                  <Typography color="text.secondary" variant="body2">
                    {post.frontmatter.date}
                    <Box
                      sx={{
                        display: "inline",
                        "@media (max-width: 600px)": {
                          display: "none",
                        },
                      }}
                    >
                      &nbsp;&bull;&nbsp;{post.timeToRead + " min read"}
                    </Box>
                  </Typography>
                </Stack>
              </Box>
              {/* social share */}
              <Stack direction="row" spacing={.5} alignItems="center">
                <Tooltip
                  PopperProps={{ disablePortal: true }}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  arrow
                  title="Copied link"
                >
                  <IconButton onClick={handleTooltipOpen}>
                    <LinkIcon sx={{ transform: "rotate(-45deg)" }} />
                  </IconButton>
                </Tooltip>

                <Box
                  sx={{
                    fontSize: "15px",
                    color: "text.secondary",
                    
                    "* > svg": {
                      color: "action.active",
                      fill: "currentColor",
                    },
                    "* > button": {
                      width: "40px !important",
                      height: "40px !important",
                      backgroundColor: "none",
                      transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                      "&:hover": {
                        backgroundColor: "action.hover",
                        opacity: "initial",
                      },
                      "&:focus": {
                        backgroundColor: "action.selected",
                        transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

                      }
                    }
                  }}
                >
                  <Provider
                    apiKey="pt_9aaebf23b47b7acc590ce3fbcae458"
                    theme={{
                      colors: {
                        primary: "inherit",
                        text: "inherit",
                        highlight: "#6200EE20",
                      },
                    }}
                  >
                    <ClapButton id={post.id} hideCounterIfLessThan={1} />
                  </Provider>
                </Box>
              </Stack>
            </Box>
            <Box py={4}>
              <Box>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontWeight: "900",
                    letterSpacing: "-0.016em",
                    lineHeight: "40px",
                    fontSize: "32px !important",
                    "@media (max-width: 900px)": {
                      lineHeight: "36px",
                    },
                    "@media (max-width: 600px)": {
                      fontSize: "32px !important",
                    },
                  }}
                >
                  {post.frontmatter.title}
                </Typography>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontSize: "22px !important",
                    letterSpacing: "0",
                    lineHeight: "28px",
                    fontWeight: "400",
                    color: "text.disabled",
                    "@media (max-width: 600px)": {
                      fontSize: "22px !important",
                    },
                  }}
                >
                  {post.frontmatter.description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                maxHeight: "40rem",
                pb: "4rem",
                "& > div": { maxHeight: "40rem" },
              }}
            >
              <GatsbyImage
                image={image}
                alt={post.frontmatter.featuredImage.name}
              />
            </Box>
          </header>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </article>
    </Layout>
  )
}

export default PostDetailTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      slug
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
          name
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM, YYYY")
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM, YYYY")
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
          name
        }
      }
    }
  }
`
