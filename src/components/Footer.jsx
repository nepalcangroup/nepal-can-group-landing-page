"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Phone } from "@mui/icons-material";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const headingStyle = {
    color: "white",
    fontWeight: 700,
    mb: 3,
    fontSize: "1.1rem",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "white",
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "var(--custom-red)",
        color: "white",
        pt: 10,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* BRAND SECTION */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                fontWeight={800}
                sx={{ letterSpacing: 0.5 }}
              >
                Nepal Can Group
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8, pr: 4 }}>
                A conglomerate dedicated to driving Nepal's economic growth
                through excellence in logistics, technology, and services. We
                empower businesses to reach global heights.
              </Typography>
            </Stack>
          </Grid>

          {/* LOGISTICS LINKS */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography sx={headingStyle}>Logistics</Typography>
            <Stack spacing={1.5}>
              <Link href="https://nepalcanmove.com" sx={linkStyle}>
                Nepal Can Move
              </Link>
              <Link href="https://international.nepalcan.com/" sx={linkStyle}>
                Nepal Can International
              </Link>
              <Link href="https://nepalcanpackaging.com" sx={linkStyle}>
                Nepal Can Packaging
              </Link>
              <Link href="https://logistics.nepalcan.com/" sx={linkStyle}>
                Nepal Can Logistics
              </Link>
            </Stack>
          </Grid>

          {/* SOLUTIONS LINKS */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography sx={headingStyle}>Solutions</Typography>
            <Stack spacing={1.5}>
              <Link href="https://nepalcancode.com" sx={linkStyle}>
                Nepal Can Code
              </Link>
              <Link href="https://nepalcan.com" sx={linkStyle}>
                Nepal Can Buy
              </Link>
            </Stack>
          </Grid>

          {/* CONNECT SECTION */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography sx={headingStyle}>Connect</Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <EmailIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2">
                  info@nepalcangroup.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <LocationOnIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2">Tinkune, Kathmandu, Nepal</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Phone sx={{ fontSize: 18 }} />
                <Typography variant="body2">01-5970736</Typography>
              </Box>

              {/* Social Icons */}
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                {[
                  { 
                    icon: <LinkedInIcon />, 
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/nepal-can-group/"
                  },
                  { 
                    icon: <FacebookIcon />, 
                    label: "Facebook",
                    href: "https://www.facebook.com/nepalcangroup"
                  },
                ].map((social, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      component={Link}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.05)",
                        color: "white",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                      }}
                    >
                      {React.cloneElement(social.icon, { fontSize: "small" })}
                    </IconButton>
                  </motion.div>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4, borderColor: "white" }} />

        {/* COPYRIGHT SECTION */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption">
            © {currentYear} Nepal Can Group. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
