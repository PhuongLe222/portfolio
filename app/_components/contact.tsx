"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionHeader } from "./section-header";
import { Button } from "@/components/ui";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kkimphuong22@gmail.com",
      href: "mailto:kkimphuong22@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+84 916 745 021",
      href: "tel:+84916745021",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ho Chi Minh City, Vietnam",
      href: "#",
    },
  ];

  return (
    <div className="h-auto overflow-hidden p-[5%] lg:px-[10%]" id="contact">
      <SectionHeader
        title="Get In Touch"
        description="Feel free to reach out if you want to collaborate on a project, have a question, or just want to connect."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">
            {contactInfo.map(({ icon: Icon, title, value, href }, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-sub-text">{title}</p>
                  {href.startsWith("http") ||
                  href.startsWith("mailto:") ||
                  href.startsWith("tel:") ? (
                    <Link
                      href={href}
                      className="text-foreground hover:text-primary transition-colors"
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {value}
                    </Link>
                  ) : (
                    <Link
                      href={href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {value}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8" data-aos="fade-up" data-aos-duration="800">
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label, link }, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent/20 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={label}
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={index * 50}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div data-aos="fade-left" data-aos-duration="1000">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-lg bg-accent/20 border border-accent/30 focus:border-primary focus:outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-accent/20 border border-accent/30 focus:border-primary focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-accent/20 border border-accent/30 focus:border-primary focus:outline-none transition-colors resize-vertical"
                placeholder="Your message here..."
              />
            </div>
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full"
              disabled
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
