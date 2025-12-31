"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PublicIcon from "@mui/icons-material/Public";
import GroupsIcon from "@mui/icons-material/Groups";
import BusinessIcon from "@mui/icons-material/Business";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const milestones = [
  {
    year: "2075 B.S.",
    title: "The Beginning",
    description:
      "Nepal Can Group founded with a vision to transform Nepal's service industry. Started with Nepal Can Move as our first venture.",
    icon: <TimelineIcon />,
    color: "#dc2626",
  },
  {
    year: "2077 B.S.",
    title: "Expansion Phase",
    description:
      "Launched Nepal Can International and Nepal Can Packaging, expanding our service portfolio beyond national boundaries.",
    icon: <PublicIcon />,
    color: "#ea580c",
  },
  {
    year: "2078 B.S.",
    title: "Digital Transformation",
    description:
      "Introduced Nepal Can Code and Nepal Can Buy, embracing digital innovation and e-commerce solutions.",
    icon: <TrendingUpIcon />,
    color: "#ca8a04",
  },
  {
    year: "2079 B.S.",
    title: "Workforce Solutions",
    description:
      "Launched Nepal Can Hire to address the growing need for professional talent acquisition and HR solutions.",
    icon: <GroupsIcon />,
    color: "#16a34a",
  },
  {
    year: "2080 B.S.",
    title: "National Recognition",
    description:
      "Recognized as Nepal's leading service conglomerate with presence in all 77 districts.",
    icon: <WorkspacePremiumIcon />,
    color: "#0891b2",
  },
  {
    year: "2081 B.S.",
    title: "Global Partnerships",
    description:
      "Established strategic partnerships with international logistics and technology companies, expanding our global footprint.",
    icon: <BusinessIcon />,
    color: "#7c3aed",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function MilestonesSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fafafa" }}>
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
              OUR JOURNEY
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
              Company{" "}
              <Box component="span" sx={{ color: "var(--custom-red)" }}>
                Milestones
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
              From a single idea to a nationwide conglomerate, witness our
              journey of growth and innovation.
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
          <Grid container spacing={3}>
            {milestones.map((milestone) => (
              <Grid
                key={milestone.year}
                item
                xs={12}
                sm={6}
                md={4}
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
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        transform: "translateY(-4px)",
                        borderColor: "var(--custom-red)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        bgcolor: milestone.color,
                      }}
                    />

                    <CardContent
                      sx={{
                        p: 4,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            bgcolor: `${milestone.color}15`,
                            color: milestone.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 2,
                          }}
                        >
                          {milestone.icon}
                        </Box>

                        <Typography
                          variant="h6"
                          fontWeight={800}
                          sx={{ color: milestone.color }}
                        >
                          {milestone.year}
                        </Typography>
                      </Box>

                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{
                          color: "#1e293b",
                          mb: 2,
                          fontSize: "1.1rem",
                        }}
                      >
                        {milestone.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#64748b",
                          lineHeight: 1.6,
                          fontSize: "0.9rem",
                          minHeight: "4.5rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {milestone.description}
                      </Typography>
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
