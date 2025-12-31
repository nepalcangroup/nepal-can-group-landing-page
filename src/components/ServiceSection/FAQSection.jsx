"use client";

import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { motion } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What services does Nepal Can Group offer?",
    answer: "Nepal Can Group offers a comprehensive range of services including courier and logistics (Nepal Can Move), international shipping (Nepal Can International), packaging solutions (Nepal Can Packaging), software development (Nepal Can Code), e-commerce (Nepal Can Buy), and talent solutions (Nepal Can Hire)."
  },
  {
    question: "How can I track my shipment with Nepal Can Move?",
    answer: "You can track your shipment by visiting our website or using our mobile app. Simply enter your tracking number in the tracking section to get real-time updates on your shipment status."
  },
  {
    question: "What are your business hours?",
    answer: "Our main office is open from Sunday to Friday, 10:00 AM to 6:00 PM. Our courier services operate throughout the week, including Saturdays for urgent deliveries. You can contact us at 01-5970736 during business hours."
  },
  {
    question: "Do you offer international shipping services?",
    answer: "Yes, through Nepal Can International, we offer comprehensive international shipping services connecting Nepal to the global marketplace. We handle both import and export shipments with proper documentation and tracking."
  },
  {
    question: "How can I partner with Nepal Can Group?",
    answer: "We're always looking for strategic partnerships. Please contact our business development team through the contact form or call us directly to discuss partnership opportunities. We offer partnership programs for businesses, franchises, and service providers."
  },
  {
    question: "What areas do you cover for delivery services?",
    answer: "We provide nationwide coverage across all 77 districts of Nepal. Our delivery network extends from major cities to remote rural areas, ensuring we can reach customers anywhere in the country."
  }
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ backgroundColor: "#f0f4f8" }}> 
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
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
                FAQ
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
                Frequently Asked{" "}
                <Box component="span" sx={{ color: "var(--custom-red)" }}>
                  Questions
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
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Find answers to common questions about our services and operations.
              </Typography>
            </Box>

            <Box maxWidth="800px" mx="auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Accordion
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                      mb: 2,
                      borderRadius: "12px !important",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      "&:before": {
                        display: "none",
                      },
                      "&.Mui-expanded": {
                        margin: "0 0 16px 0",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          sx={{
                            color: "var(--custom-red)",
                            fontSize: "1.5rem",
                          }}
                        />
                      }
                      sx={{
                        bgcolor: "white",
                        borderRadius: "12px",
                        px: 3,
                        py: 2,
                        "&.Mui-expanded": {
                          minHeight: "64px",
                          bgcolor: "white",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{
                          color: "#1e293b",
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#64748b",
                          lineHeight: 1.7,
                          fontSize: "1rem",
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>
    </div>
  );
};

export default FAQSection;
