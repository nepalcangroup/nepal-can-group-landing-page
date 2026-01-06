"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Phone, Home, Email, ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const API_URL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PROD_API_URL
      : process.env.NEXT_PUBLIC_DEV_API_URL;

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      toast.success("Message sent successfully!");
      reset();
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="bg-white py-12 md:py-20 px-6 lg:px-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Brand Messaging & Contact Info */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Let's Build Something <br />
                <span className="text-[var(--custom-red)]">
                  Incredible
                </span>{" "}
                Together
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                Whether you have a question about our logistics services or need
                a custom tech solution, our team is ready to help you succeed.
              </p>
            </div>

            <div className="space-y-8">
              {/* Email */}
              <div
                className="flex items-center gap-6 group cursor-pointer"
                onClick={() => {
                  window.location.href = "mailto:info@nepalcangroup.com";
                }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-100 shadow-sm text-[var(--custom-red)] bg-white group-hover:bg-[var(--custom-red)] group-hover:text-white transition-all">
                  <Email fontSize="medium" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
                  <p className="text-gray-600">info@nepalcangroup.com</p>
                  <span className="text-[var(--custom-red)] text-sm font-semibold">
                    Support available 24/7
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex items-center gap-6 group cursor-pointer"
                onClick={() => {
                  window.location.href = "tel:01-5970736";
                }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-100 shadow-sm text-[var(--custom-red)] bg-white group-hover:bg-[var(--custom-red)] group-hover:text-white transition-all">
                  <Phone fontSize="medium" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Call Us</h4>
                  <p className="text-gray-600">01-5970736</p>
                  <span className="text-[var(--custom-red)] text-sm font-semibold">
                    Sun - Fri, 10am - 6pm
                  </span>
                </div>
              </div>

              {/* Address */}
              <div
                className="flex items-center gap-6 group cursor-pointer"
                onClick={() => {
                  const element = document.getElementById("map");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-100 shadow-sm text-[var(--custom-red)] bg-white group-hover:bg-[var(--custom-red)] group-hover:text-white transition-all">
                  <Home fontSize="medium" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    Headquarters
                  </h4>
                  <p className="text-gray-600">Tinkune, Kathmandu, Nepal</p>
                  <span className="text-[var(--custom-red)] text-sm font-semibold hover:underline">
                    Visit our central office
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Box
            sx={{
              background: "rgba(248, 250, 252, 0.5)",
              p: { xs: 4, md: 10 },
              borderRadius: "2rem",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 25px rgba(203, 213, 225, 0.5)",
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Full Name */}
              <Controller
                name="fullName"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Full Name"
                    placeholder="John Doe"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    variant="outlined"
                    InputProps={{
                      sx: {
                        borderRadius: "1rem",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: fieldState.error ? "#f87171" : "#cbd5e1",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--custom-red)",
                        },
                      },
                    }}
                  />
                )}
              />

              {/* Phone Number */}
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Phone Number"
                    placeholder="+977 98XXXXXXXX"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    variant="outlined"
                    InputProps={{
                      sx: {
                        borderRadius: "1rem",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: fieldState.error ? "#f87171" : "#cbd5e1",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--custom-red)",
                        },
                      },
                    }}
                  />
                )}
              />

              {/* Email */}
              <Controller
                name="email"
                control={control}
                rules={{
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Email Address"
                    type="email"
                    placeholder="john@example.com"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    variant="outlined"
                    InputProps={{
                      sx: {
                        borderRadius: "1rem",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: fieldState.error ? "#f87171" : "#cbd5e1",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--custom-red)",
                        },
                      },
                    }}
                  />
                )}
              />

              {/* Inquiry Type */}
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth>
                    <InputLabel id="inquiry-type-label">
                      Inquiry Type
                    </InputLabel>
                    <Select
                      {...field}
                      labelId="inquiry-type-label"
                      label="Inquiry Type"
                      displayEmpty
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            mt: 1,
                            maxHeight: 300,
                          },
                        },
                        disableScrollLock: true,
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "left",
                        },
                        transformOrigin: {
                          vertical: "top",
                          horizontal: "left",
                        },
                      }}
                      sx={{
                        borderRadius: "1rem",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#cbd5e1",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--custom-red)",
                        },
                      }}
                    >
                      <MenuItem value="logistics">Logistics Services</MenuItem>
                      <MenuItem value="tech">Tech Solutions</MenuItem>
                      <MenuItem value="packaging">Packaging Solutions</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                )}
              />

              {/* Message */}
              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Your Message"
                    placeholder="Tell us about your project..."
                    fullWidth
                    multiline
                    rows={4}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    variant="outlined"
                    InputProps={{
                      sx: {
                        borderRadius: "1rem",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: fieldState.error ? "#f87171" : "#cbd5e1",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "var(--custom-red)",
                        },
                      },
                    }}
                  />
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  backgroundColor: "var(--custom-red)",
                  borderRadius: "1rem",
                  py: 2,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#b91c2c" },
                }}
                endIcon={!loading && <ArrowForward />}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Box>
        </div>
      </div>
    </section>
  );
}
