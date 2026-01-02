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
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    name: "Rajesh Sharma",
    position: "CEO, TechHub Nepal",
    company: "Technology Partner",
    content:
      "Nepal Can Move has been instrumental in our logistics operations. Their reliable delivery service and real-time tracking have helped us serve our customers better across Nepal.",
    image: "/contact/building.jpg",
  },
  {
    name: "Sita Karki",
    position: "Operations Manager",
    company: "E-commerce Store",
    content:
      "The comprehensive solutions from Nepal Can Group have transformed our business. From packaging to delivery, everything is handled professionally and efficiently.",
    image: "/contact/building.jpg",
  },
  {
    name: "Bikram Gurung",
    position: "Founder",
    company: "Local Artisan Collective",
    content:
      "Nepal Can International helped us expand our reach globally. Their international shipping services are reliable, affordable, and the customer support is exceptional.",
    image: "/contact/building.jpg",
  },
  {
    name: "Anita Mishra",
    position: "HR Director",
    company: "Manufacturing Company",
    content:
      "Nepal Can Hire has been our trusted partner for talent acquisition. They understand our needs and consistently provide qualified candidates who fit our culture.",
    image: "/contact/building.jpg",
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

export default function TestimonialsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
      <Container maxWidth="lg">
        {/* Header */}
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
              TESTIMONIALS
            </Typography>

            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "#1e293b",
                mb: 3,
              }}
            >
              What Our{" "}
              <Box component="span" sx={{ color: "var(--custom-red)" }}>
                Partners Say
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
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Hear from our valued partners and clients about their experience
              working with Nepal Can Group.
            </Typography>
          </Box>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {testimonials.map((testimonial) => (
              <Grid
                key={testimonial.name}
                item
                xs={12}
                md={6}
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
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 4,
                      border: "1px solid #e2e8f0",
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
                      {/* Quote Icon */}
                      <FormatQuoteIcon
                        sx={{
                          fontSize: "3rem",
                          color: "rgba(220, 38, 38, 0.12)",
                          transform: "rotate(180deg)",
                          mb: 2,
                        }}
                      />

                      {/* Content */}
                      <Typography
                        sx={{
                          color: "#475569",
                          fontStyle: "italic",
                          lineHeight: 1.7,
                          fontSize: "1rem",
                          mb: "auto",
                          minHeight: "6.5rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        “{testimonial.content}”
                      </Typography>

                      {/* Author */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                          mt: 4,
                        }}
                      >
                        <Avatar
                          src={testimonial.image}
                          alt={testimonial.name}
                          sx={{
                            width: 56,
                            height: 56,
                            border: "2px solid var(--custom-red)",
                          }}
                        />

                        <Box>
                          <Typography fontWeight={700} color="#1e293b">
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "var(--custom-red)", fontWeight: 600 }}
                          >
                            {testimonial.position}
                          </Typography>
                          <Typography variant="caption" color="#64748b">
                            {testimonial.company}
                          </Typography>
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
