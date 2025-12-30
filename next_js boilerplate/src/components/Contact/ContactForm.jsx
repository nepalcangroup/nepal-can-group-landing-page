"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { Phone, Home, Email } from "@mui/icons-material";
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
      subject: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await fetch("https://postghost.onrender.com/webhook/OOVFOI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }
      toast.success("Message sent successfully!");
      reset();
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-4 md:py-10 bg-gray-100" id="contact-form">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[var(--custom-red)] mb-2">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
          <div className="flex items-start gap-4">
            <Phone className="text-[var(--custom-red)] mt-6 " />
            <div>
              <h3 className="font-bold mb-1 text-lg md:text-xl">Phone:</h3>
              <p>01-5970736</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Home className="text-[var(--custom-red)] mt-6 " />
            <div>
              <h3 className="font-bold mb-1 text-lg md:text-xl">Address:</h3>

              <p>Tinkune, Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Email className="text-[var(--custom-red)] mt-6 " />
            <div>
              <h3 className="font-bold mb-1 text-lg md:text-xl">Email:</h3>
              <p>info@nepalcangroup.com</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form
            className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="fullName"
              control={control}
              rules={{ required: "Full name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Full Name"
                  fullWidth
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                />
              )}
            />

            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Subject"
                  fullWidth
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone must be numbers only",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone"
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  type="email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="How can we help you?"
                  fullWidth
                  multiline
                  rows={4}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                bgcolor: "var(--custom-red)",
                textTransform: "none",
                fontSize: "1rem",
                py: 1.2,
                width: "200px",
                "&:hover": { bgcolor: "#c60000" },
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-md h-64 sm:h-72 lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0644957395734!2d85.34524267599139!3d27.684401426502287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a4f4fb0179%3A0xbe53904252e95812!2sNepal%20Can%20Move%20(NCM)%20-%20Tinkune%20%7C%20National%20%26%20International%20Courier%20Service!5e0!3m2!1sen!2snp!4v1767078078694!5m2!1sen!2snp"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
