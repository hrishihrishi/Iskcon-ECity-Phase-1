import Link from "next/link";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "@/app/globals.css";
import TEMPLE from "@/data/contactDetails";

export default function Footer() {
  return (
    <footer className="iskcon-footer">
      <div className="iskcon-footer-container">
        {/* Header & About Section */}
        <div>
          <h2 className="iskcon-footer-title">{TEMPLE.NAME}</h2>
          <p className="iskcon-footer-text">
            {TEMPLE.DESCRIPTION}
          </p>

          {/* Social Media Links */}
          <div className="iskcon-social-links">
            <a
              href={TEMPLE.FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="iskcon-social-icon"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href={TEMPLE.INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="iskcon-social-icon"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={TEMPLE.WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="iskcon-social-icon"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={TEMPLE.YOUTUBE_LINK}
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
                {TEMPLE.SHORT_ADDRESS}
              </span>
            </div>
            <div className="iskcon-contact-item">
              <Mail size={20} className="iskcon-contact-icon" />
              <a
                href={`mailto:${TEMPLE.EMAIL}`}
                className="iskcon-contact-link"
              >
                {TEMPLE.EMAIL}
              </a>
            </div>
            <div className="iskcon-contact-item">
              <Phone size={20} className="iskcon-contact-icon" />
              <a href={`tel:${TEMPLE.PHONE_NUMBER}`} className="iskcon-contact-link">
                {TEMPLE.PHONE_NUMBER}
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
          &copy; {new Date().getFullYear()} {TEMPLE.NAME}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

