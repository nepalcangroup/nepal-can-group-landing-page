"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const leaders = [
  {
    name: "Rajendra K. Shrestha",
    position: "Founder & CEO",
    bio: "Visionary leader with over 15 years of experience in logistics and business development. Founded Nepal Can Group with a mission to transform Nepal's service industry.",
    image: "/contact/building.jpg",
    linkedin: "https://www.linkedin.com/in/rajendra-shrestha",
    email: "rajendra@nepalcangroup.com",
  },
  {
    name: "Sujata Thapa",
    position: "Chief Operating Officer",
    bio: "Operations expert specializing in supply chain management and customer experience. Ensures seamless service delivery across all Nepal Can Group companies.",
    image: "/contact/building.jpg",
    linkedin: "https://www.linkedin.com/in/sujata-thapa",
    email: "sujata@nepalcangroup.com",
  },
  {
    name: "Bikram Gurung",
    position: "Chief Technology Officer",
    bio: "Technology innovator driving digital transformation across the Nepal Can ecosystem. Expert in software development and systems architecture.",
    image: "/contact/building.jpg",
    linkedin: "https://www.linkedin.com/in/bikram-gurung",
    email: "bikram@nepalcangroup.com",
  },
  {
    name: "Anita Mishra",
    position: "Chief Financial Officer",
    bio: "Financial strategist with extensive experience in corporate finance and investment. Manages financial planning and analysis for the entire group.",
    image: "/contact/building.jpg",
    linkedin: "https://www.linkedin.com/in/anita-mishra",
    email: "anita@nepalcangroup.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function LeadershipSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="overline"
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "var(--custom-red)",
                mb: 2,
                display: "block",
              }}
            >
              LEADERSHIP
            </Typography>

            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "#1e293b",
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Meet Our{" "}
              <Box component="span" sx={{ color: "var(--custom-red)" }}>
                Leadership Team
              </Box>
            </Typography>

            <Box
              sx={{
                width: 80,
                height: 4,
                bgcolor: "var(--custom-red)",
                borderRadius: 2,
                mx: "auto",
                mb: 4,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                fontSize: "1.1rem",
                color: "#64748b",
                lineHeight: 1.7,
                fontWeight: 400,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              The visionary leaders driving Nepal Can Group's mission to
              revolutionize services across Nepal.
            </Typography>
          </Box>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {leaders.map((leader) => (
              <Grid
                key={leader.email}
                item
                xs={12}
                sm={6}
                md={3}
                sx={{ display: "flex" }}
              >
                <motion.div
                  variants={itemVariants}
                  style={{ display: "flex", width: "100%" }}
                >
                  <Card
                    elevation={0}
                    sx={{
                      flex: 1,
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 4,
                      border: "1px solid #e2e8f0",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        transform: "translateY(-4px)",
                        borderColor: "var(--custom-red)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 4,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Avatar
                        src={leader.image}
                        alt={leader.name}
                        sx={{
                          width: 96,
                          height: 96,
                          mx: "auto",
                          mb: 3,
                          border: "3px solid var(--custom-red)",
                          bgcolor: "#fff",
                        }}
                      />

                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{ color: "#1e293b", mb: 1, fontSize: "1.1rem" }}
                      >
                        {leader.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "var(--custom-red)",
                          fontWeight: 600,
                          mb: 2,
                          fontSize: "0.9rem",
                        }}
                      >
                        {leader.position}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#64748b",
                          lineHeight: 1.6,
                          fontSize: "0.85rem",
                          minHeight: "5rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {leader.bio}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 2,
                          mt: 3,
                        }}
                      >
                        <Box
                          component="a"
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            bgcolor: "#f0f4f8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease",
                            textDecoration: "none",
                            "&:hover": {
                              bgcolor: "var(--custom-red)",
                              color: "white",
                            },
                          }}
                        >
                          <LinkedInIcon sx={{ fontSize: "1.2rem" }} />
                        </Box>

                        <Box
                          component="a"
                          href={`mailto:${leader.email}`}
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            bgcolor: "#f0f4f8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease",
                            textDecoration: "none",
                            "&:hover": {
                              bgcolor: "var(--custom-red)",
                              color: "white",
                            },
                          }}
                        >
                          <EmailIcon sx={{ fontSize: "1.2rem" }} />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
