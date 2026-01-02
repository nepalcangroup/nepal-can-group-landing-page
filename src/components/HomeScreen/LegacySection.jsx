import React from "react";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import Link from "next/link";

const LegacySection = () => {
  return (
    <Box
      component="section"
      className="bg-white"
      sx={{ py: { xs: 10, md: 18 } }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 8, md: 12 }} alignItems="center">
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Title Group */}
              <div className="mb-12">
                <Typography
                  variant="overline"
                  className="text-slate-500 tracking-[0.35em] font-semibold block mb-2"
                >
                  OUR
                </Typography>

                <Typography
                  className="font-extrabold text-slate-900"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3.2rem" },
                    lineHeight: 1,
                  }}
                >
                  LEGACY
                </Typography>
              </div>

              {/* Description */}
              <Typography
                className="text-slate-600 leading-relaxed max-w-md mb-8"
                sx={{ fontSize: "1.05rem" }}
              >
                Nepal Can Group was established with a commitment to
                reliability, innovation, and national connectivity. Over the
                years, it has evolved into a diversified group, shaping the
                future of logistics and movement across Nepal.
              </Typography>

              {/* Arrow  */}
              <Link href="/timeline">
                <IconButton
                  disableRipple
                  className="p-0 group"
                  aria-label="View Timeline"
                >
                  <ArrowForwardIcon
                    fontSize="large"
                    className="
                      text-amber-600 
                      transition-transform 
                      group-hover:translate-x-2
                    "
                  />
                </IconButton>
              </Link>
            </motion.div>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Floating Text */}
              <div className="absolute top-8 right-8 z-10 text-right">
                <Typography className="text-white tracking-[0.3em] text-sm font-semibold">
                  A VISION
                </Typography>
                <Typography className="text-amber-400 tracking-[0.3em] text-sm font-semibold">
                  A LEGACY
                </Typography>
              </div>

              {/* Image */}
              <Box
                component="img"
                src="/legacySection/building.jpg"
                alt="Nepal Can Group Legacy"
                className="w-full object-cover rounded-xl shadow-xl"
                sx={{ maxHeight: 700 }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LegacySection;
