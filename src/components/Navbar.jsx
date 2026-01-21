"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Container,
  Divider,
  Stack,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);
  const lastScrollY = React.useRef(0);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);

  const pathname = usePathname();

  const brandBlue = "#0B2B5B";
  const brandRed = "var(--custom-red)";
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + 10 && currentY > 120) {
        setShowTopBar(false);
      } else if (currentY < lastScrollY.current - 10 || currentY < 80) {
        setShowTopBar(true);
      }

      const isHomePage = pathname === "/";
      const heroThreshold = window.innerHeight - 100;
      setIsHeroSection(isHomePage && currentY < heroThreshold);

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
  if (pathname !== "/") {
    setIsHeroSection(false);
  } else {
    setIsHeroSection(window.scrollY < window.innerHeight - 100);
  }
}, [pathname]);

  const companies = [
    {
      name: "Nepal Can Move",
      desc: "Courier & Logistics",
      href: "https://nepalcanmove.com",
      external: true,
    },
    {
      name: "Nepal Can International",
      desc: "Global Shipping",
      href: "https://international.nepalcan.com/",
      external: true,
    },
    {
      name: "Nepal Can Packaging",
      desc: "Packaging Solutions",
      href: "https://nepalcanpackaging.com",
      external: true,
    },
    {
      name: "Nepal Can Code",
      desc: "Digital & Software",
      href: "https://nepalcancode.com",
      external: true,
    },
    {
      name: "Nepal Can Logistics",
      desc: "Logistics & Transportation Management Solutions",
      href: "https://logistics.nepalcan.com",
      external: true,
    },
    {
      name: "NepalCan.com",
      desc: "Online Marketplace with Fast Delivery",
      href: "https://nepalcan.com",
      external: true,
    },
  ];

  const currentLogo = isHeroSection
    ? "/logo/whiteLogo.png"
    : "/logo/redLogo.png";

  const textColor = isHeroSection ? "white" : brandBlue;
  const hoverColor = isHeroSection ? "white" : brandRed;
  const navbarBg = isHeroSection ? "transparent" : "rgba(255, 255, 255, 0.95)";
  const backdropFilter = isHeroSection ? "none" : "blur(8px)";
  const borderBottom = isHeroSection
    ? "1px solid transparent"
    : "1px solid #f0f0f0";
  const elevation = isHeroSection ? 0 : 2;

  return (
    <>
      {/* Top Bar */}
      <Box
        sx={{
          bgcolor: brandRed,
          color: "white",
          height: showTopBar ? "40px" : "0px",
          opacity: showTopBar ? 1 : 0,
          transition: "all 0.3s ease-in-out",
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          overflow: "hidden",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            spacing={50}
          >
            {/* CONTACT INFO */}
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  01-5970736
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  info@nepalcangroup.com
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOnIcon sx={{ fontSize: 16 }} />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  Tinkune, Kathmandu, Nepal
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={3} alignItems="center">
              {/* Careers Link */}
              <Link
                href="/career"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    cursor: "pointer",
                    color: "white",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  Careers
                </Typography>
              </Link>

              {/* Social Icons */}
              <Stack direction="row" spacing={2}>
                <Link
                  href="https://www.facebook.com/nepalcangroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <FacebookIcon
                    sx={{
                      fontSize: 18,
                      cursor: "pointer",
                      color: "white",
                      "&:hover": { opacity: 0.8 },
                    }}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/nepal-can-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <LinkedInIcon
                    sx={{
                      fontSize: 18,
                      cursor: "pointer",
                      color: "white",
                      "&:hover": { opacity: 0.8 },
                    }}
                  />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Main Navbar */}
      <AppBar
        position="fixed"
        elevation={elevation}
        sx={{
          top: showTopBar ? { lg: "40px", xs: "0px" } : "0px",
          bgcolor: navbarBg,
          backdropFilter,
          transition: "all 0.3s ease",
          borderBottom,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ height: { xs: 70, lg: 90 }, justifyContent: "space-between" }}
          >
            {/* Logo */}
            <Link href="/">
              <Image
                src={currentLogo}
                alt="Nepal Can Group Logo"
                width={320}
                height={100}
                priority
                style={{ objectFit: "contain" }}
              />
            </Link>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                gap: 5,
                alignItems: "center",
              }}
            >
              {/* Home Link */}
              <Link href="/" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: textColor,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    opacity: isHeroSection ? 0.9 : 1,
                    "&:hover": { color: hoverColor, opacity: 1 },
                    transition: "0.2s",
                  }}
                >
                  Home
                </Typography>
              </Link>

              {/* Other Links */}
              {["About Us", "Services", "Blog"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      color: textColor,
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      opacity: isHeroSection ? 0.9 : 1,
                      "&:hover": { color: hoverColor, opacity: 1 },
                      transition: "0.2s",
                    }}
                  >
                    {item}
                  </Typography>
                </Link>
              ))}

              {/* Companies Dropdown */}
              <Box
                onMouseEnter={() => setCompaniesOpen(true)}
                onMouseLeave={() => setCompaniesOpen(false)}
                sx={{ position: "relative", py: 2 }}
              >
                <Typography
                  sx={{
                    color: textColor,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    opacity: isHeroSection ? 0.9 : 1,
                  }}
                >
                  Companies{" "}
                  <ExpandMore sx={{ fontSize: 18, color: textColor }} />
                </Typography>

                {companiesOpen && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: "-50%",
                      width: 300,
                      bgcolor: "white",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      borderRadius: 2,
                      p: 2,
                      border: "1px solid #f0f0f0",
                      zIndex: 1300,
                    }}
                  >
                    {companies.map((c) => (
                      <Link
                        key={c.name}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 1.5,
                            "&:hover": { bgcolor: "#fff5f6" },
                            transition: "0.2s",
                          }}
                        >
                          <Typography
                            sx={{
                              color: brandBlue,
                              fontWeight: 700,
                              fontSize: "0.9rem",
                            }}
                          >
                            {c.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ color: "text.secondary" }}
                          >
                            {c.desc}
                          </Typography>
                        </Box>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>

              {/* Contact Button */}
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    bgcolor: brandRed,
                    color: "white",
                    px: 3,
                    py: 1,
                    borderRadius: "50px",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    "&:hover": {
                      boxShadow: "0 4px 15px rgba(220, 30, 62, 0.3)",
                    },
                    transition: "0.3s",
                  }}
                >
                  Contact Us
                </Box>
              </Link>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { lg: "none" }, color: textColor }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: "85%",
            maxWidth: 320,
            height: "auto",
            maxHeight: "calc(100vh - 32px)",
            mt: 2,
            mr: 2,
            borderRadius: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 800, color: brandBlue }}>
              Menu
            </Typography>
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{ bgcolor: "#f5f5f5" }}
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>

          <List disablePadding>
            {["Home", "About Us", "Services", "Blog"].map((text) => (
              <ListItem key={text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={Link}
                  href={`/${
                    text === "Home" ? "" : text.toLowerCase().replace(" ", "")
                  }`}
                  sx={{
                    borderRadius: "12px",
                    py: 1.5,
                    "&:hover": { bgcolor: "#f7f9fc" },
                  }}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontWeight: 700,
                      color: brandBlue,
                    }}
                  />
                  <ArrowForwardIosIcon sx={{ fontSize: 12, opacity: 0.3 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Mobile Companies Dropdown */}
          <Box>
            <ListItemButton
              onClick={() => setCompaniesOpen(!companiesOpen)}
              sx={{ borderRadius: "12px", "&:hover": { bgcolor: "#f7f9fc" } }}
            >
              <ListItemText
                primary="Companies"
                primaryTypographyProps={{ fontWeight: 700, color: brandBlue }}
              />
              {companiesOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={companiesOpen} timeout={300} unmountOnExit>
              <List sx={{ pl: 2, pt: 1 }}>
                {companies.map((c) => (
                  <ListItemButton
                    key={c.name}
                    component={Link}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ borderRadius: "10px", py: 1 }}
                  >
                    <ListItemText
                      primary={c.name}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </Box>

          {/* Contact Info Card */}
          <Tooltip title="Click to visit contact page" arrow>
            <Link
              href="/contact"
              style={{ textDecoration: "none" }}
              onClick={() => setMobileOpen(false)}
            >
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  bgcolor: "#fff5f6",
                  borderRadius: "16px",
                  border: "1px solid rgba(220,30,62,0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(220,30,62,0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1,
                  }}
                >
                  <PhoneIcon sx={{ color: brandRed, fontSize: 18 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    01-5970736
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <EmailIcon sx={{ color: brandRed, fontSize: 18 }} />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, fontSize: "0.75rem" }}
                  >
                    info@nepalcangroup.com
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Tooltip>
        </Box>
      </Drawer>
    </>
  );
}
