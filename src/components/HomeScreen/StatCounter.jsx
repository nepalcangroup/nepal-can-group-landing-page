import React, { useRef, useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

const StatCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 1800;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numericValue));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  return (
    <Box ref={ref}>
      <Typography
        component="div"
        className="font-extrabold text-slate-900"
        sx={{
          fontSize: { xs: "2.5rem", sm: "3rem", md: "3.75rem" },
          lineHeight: 1.1,
        }}
      >
        {value.includes("$") && "$"}
        {count.toLocaleString()}
        {suffix}
      </Typography>
    </Box>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "YEARS", value: "7", suffix: "+" },
    { label: "EMPLOYEES", value: "1500", suffix: "+" },
    { label: "BRANCHES", value: "500", suffix: "+" },
    { label: "HAPPY CUSTOMERS", value: "6", suffix: "M+" },
  ];

  return (
    <Box
      component="section"
      className="relative min-h-screen flex items-center bg-[#fafafa]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url(/statSection/building.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <Container maxWidth="xl" className="relative z-10">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-y-14 
            gap-x-8
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="
                flex 
                flex-col
                items-center 
              "
            >
              {/* Counter */}
              <StatCounter value={stat.value} suffix={stat.suffix} />

              {/* Red Line */}
              <div
                className="
                  w-14 
                  h-[2px] 
                  my-3
                "
                style={{ backgroundColor: "var(--custom-red)" }}
              />

              {/* Label */}
              <Typography
                className="
                  tracking-[0.3em] 
                  text-slate-700 
                  font-semibold
                "
                sx={{
                  fontSize: "0.8rem",
                }}
              >
                {stat.label}
              </Typography>
            </motion.div>
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default StatsSection;
