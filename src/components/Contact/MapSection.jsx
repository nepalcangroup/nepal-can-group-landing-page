"use client";

import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function MapSection() {
  const mapActions = [
    {
      title: "Get Directions",
      desc: "Open in Google Maps",
      icon: <DirectionsIcon />,
      onClick: () =>
        window.open(
          "https://www.google.com/maps/dir/?api=1&destination=Nepal+Can+Move+Tinkune",
          "_blank"
        ),
    },
    {
      title: "Parking Available",
      desc: "Free on-site parking",
      icon: <LocalParkingIcon />,
    },
    {
      title: "Office Hours",
      desc: "Sun – Fri • 10AM – 6PM",
      icon: <AccessTimeIcon />,
    },
  ];

  return (
    <Box
      id="map"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff1f2" }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                mx: "auto",
                mb: 3,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(220,38,38,0.1)",
                color: "var(--custom-red)",
              }}
            >
              <LocationOnIcon fontSize="large" />
            </Box>

            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                color: "#0f172a",
                mb: 2,
              }}
            >
              Find Us on the Map
            </Typography>

            <Typography
              sx={{
                maxWidth: 700,
                mx: "auto",
                color: "#64748b",
                fontSize: "1.1rem",
                lineHeight: 1.7,
              }}
            >
              Visit our headquarters in Tinkune, Kathmandu. We’re easily
              accessible and ready to welcome you for consultations and
              discussions.
            </Typography>
          </motion.div>
        </Box>

        {/* Action Cards */}
        <Grid container spacing={4} mb={{ xs: 8, md: 10 }}>
          {mapActions.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Box
                  onClick={item.onClick}
                  sx={{
                    bgcolor: "white",
                    p: 4,
                    borderRadius: 3,
                    height: "100%",
                    textAlign: "center",
                    boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
                    cursor: item.onClick ? "pointer" : "default",
                    border: "2px solid transparent", 
                    transition:
                      "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",

                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 14px 45px rgba(0,0,0,0.15)",
                      borderColor: "var(--custom-red)", 
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      mx: "auto",
                      mb: 3,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "rgba(220,38,38,0.1)",
                      color: "var(--custom-red)",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography fontWeight={700} mb={1} color="#0f172a">
                    {item.title}
                  </Typography>

                  <Typography color="#64748b">{item.desc}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: { xs: 3, md: 4 },
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              border: "4px solid white",
              height: { xs: 350, md: 450 },
            }}
          >
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0644957395734!2d85.34524267599139!3d27.684401426502287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a4f4fb0179%3A0xbe53904252e95812!2sNepal%20Can%20Move%20(NCM)%20-%20Tinkune!5e0!3m2!1sen!2snp!4v1767078078694"
              sx={{
                width: "100%",
                height: "100%",
                border: 0,
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </motion.div>

        {/* Bottom CTA */}
        <Box textAlign="center" mt={5}>
          <Button
            variant="outlined"
            startIcon={<DirectionsIcon />}
            sx={{
              borderColor: "var(--custom-red)",
              color: "var(--custom-red)",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: "999px",
              "&:hover": {
                bgcolor: "rgba(220,38,38,0.08)",
                borderColor: "var(--custom-red)",
              },
            }}
            onClick={() =>
              window.open(
                "https://www.google.com/maps/dir/?api=1&destination=Nepal+Can+Move+Tinkune",
                "_blank"
              )
            }
          >
            Open in Google Maps
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
