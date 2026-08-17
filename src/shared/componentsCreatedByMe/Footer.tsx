import Link from "next/link";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import "@/app/globals.css";
import { CONTACT_DETAILS } from "@/constants/contactDetails";

export default function Footer() {
  return (
    <footer className="iskcon-footer">
      <div className="iskcon-footer-container">
        {/* Header & About Section */}
        <div>
          <h2 className="iskcon-footer-title">{CONTACT_DETAILS.name}</h2>
          <p className="iskcon-footer-text">
            {CONTACT_DETAILS.description}
          </p>

          {/* Social Media Links */}
          <div className="iskcon-social-links">
            <a
              href={CONTACT_DETAILS.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="iskcon-social-icon"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href={CONTACT_DETAILS.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="iskcon-social-icon"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={CONTACT_DETAILS.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="iskcon-social-icon"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={CONTACT_DETAILS.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="iskcon-social-icon"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="iskcon-footer-subtitle">Contact Us</h3>
          <div className="iskcon-contact-list">
            <div className="iskcon-contact-item">
              <MapPin size={20} className="iskcon-contact-icon" />
              <span>
                {CONTACT_DETAILS.shortAddress}
              </span>
            </div>
            <div className="iskcon-contact-item">
              <Mail size={20} className="iskcon-contact-icon" />
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="iskcon-contact-link"
              >
                {CONTACT_DETAILS.email}
              </a>
            </div>
            <div className="iskcon-contact-item">
              <Phone size={20} className="iskcon-contact-icon" />
              <a href={`tel:${CONTACT_DETAILS.phoneRaw}`} className="iskcon-contact-link">
                {CONTACT_DETAILS.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
          <h3 className="iskcon-footer-subtitle">Support Our Cause</h3>
          <p className="iskcon-footer-text">
            Your generous contributions help maintain temple activities,
            prasadam distribution, and community outreach.
          </p>
          <div>
            <Link href="/donate" className="iskcon-donate-btn">
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="iskcon-footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {CONTACT_DETAILS.name}. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

