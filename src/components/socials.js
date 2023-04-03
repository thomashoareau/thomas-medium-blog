import * as React from "react"

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const profiles = {
  github: {
    name: "GitHub",
    url: "https://github.com/thomashoareau",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    followers: "",
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thomashoareau//",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png",
    followers: "216",
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/thomasrhoareau/",
    icon: "https://johnhoward.on.ca/peterborough/wp-content/uploads/sites/12/2021/03/instagram-logo-svg-vector-for-print.svg",
    followers: "251",
  }
}

const Socials = () => {
  const [gitFollowers, setGitFollowers] = React.useState(0)
  React.useEffect(() => {
    fetch("https://api.github.com/users/thomashoareau")
      .then(res => res.json())
      .then(data => {
        setGitFollowers(data.followers)
      }
      )
  }, [])
  
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
        Social media
      </Typography>
      <Stack spacing={2}>
        {Object.keys(profiles).map(key => {
          const profile = profiles[key]
          return (
            <Box
              key={profile.name}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Avatar
                    variant="square"
                    alt="avatar"
                    src={profile.icon}
                    sx={{ width: 20, height: 20 }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 500 }}>
                    {profile.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {profile.followers}
                    {profile.name === "GitHub" && gitFollowers}
                    {" "}
                    {profile.name === "YouTube" ? "subscribers" : "followers"}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "text.primary",
                  borderColor: "divider",
                  fontWeight: 400,
                  height: "fit-content",
                  borderRadius: "99em",
                  textTransform: "capitalize",
                }}
                href={profile.url}
              >
                Follow
              </Button>
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}

export const Profiles = profiles
export default Socials
