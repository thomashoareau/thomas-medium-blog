import * as React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

// local imports
import Post from "../templates/post"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tags from "../components/tagsPanel"

// MUI components
import Alert from "@mui/material/Alert"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid
          container
          sx={{ gap: "2rem", "@media (max-width: 600px)": { gap: "1.5rem" } }}
        >
          {children}
        </Grid>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Portfolio" />
        <p>
          No blog posts found. Add markdown posts to "content/posts" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Portfolio" />
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
        {/* category tabs selector */}
        <Alert
          severity="info"
          sx={{
            backgroundColor: "primary.light",
            color: "primary.dark",
            "& .MuiSvgIcon-root": { color: "primary.dark" },
          }}
          icon={"⏳"}
        >
          Currently ramping up my skills in Next.js for an exciting new project in the world of sports betting!
        </Alert>
        <Box
          sx={{
            width: "100%",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="nav tabs example"
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
              {...a11yProps(0)}
              sx={{
                textTransform: "capitalize",
                fontWeight: 400,
                minWidth: "60px",
                "&.Mui-selected": { color: "text.primary" },
              }}
            />
            
            <Tab
              label="Gear List"
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
        
        <Tags />
        {/* all posts panel  */}
        <TabPanel value={value} index={0} key={"all"}>
          {posts.map(post => {
            return (
              <Grid
                item
                xs={12}
                key={post.id}
                sx={{
                  "&:last-child": { "& > hr": { display: "none" } },
                }}
              >
                <Post data={post} />
                <Divider
                  sx={{ pt: 4, "@media (max-width: 600px)": { pt: "1.5rem" } }}
                />
              </Grid>
            )
          })}
        </TabPanel>

        {/* categories panels */}
        {data.allMdx.group.map((category, index) => (
          <TabPanel value={value} index={index + 1} key={category.fieldValue}>
            {posts.filter(post => post.frontmatter.category === category.fieldValue).map(post => {
                return (
                  <Grid
                    item
                    xs={12}
                    key={post.id}
                    sx={{
                      "&:last-child": { "& > hr": { display: "none" } },
                    }}
                  >
                    <Post data={post} />
                  <Divider
                      sx={{
                        pt: 4,
                        "@media (max-width: 600px)": { pt: "1.5rem" },
                      }}
                    />
                  </Grid>
                )
            })}
          </TabPanel>
        ))}
      </Container>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 200) {
      group(field: frontmatter___category) {
        fieldValue
      }
      nodes {
        id
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          category
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1)
            }
            name
          }
        }
      }
    }
  }
`
