import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <h3 className={styles.logo}>
                <span className={styles.logoIcon}>⚜</span> Nawabi Lucknow
              </h3>
              <p className={styles.tagline}>
                "Pehle aap" — The city of Tehzeeb, culture, and culinary
                excellence. Discover the timeless charm of the City of Nawabs.
              </p>
              <div className={styles.socialLinks}>
                {[
                  { icon: "𝕏", label: "Twitter", href: "#" },
                  { icon: "f", label: "Facebook", href: "#" },
                  { icon: "▶", label: "YouTube", href: "#" },
                  { icon: "📸", label: "Instagram", href: "#" },
                ].map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className={styles.socialLink}
                    aria-label={label}
                    title={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Explore</h4>
              <ul className={styles.linkList}>
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Lucknow" },
                  { to: "/attractions", label: "Attractions" },
                  { to: "/food", label: "Food & Cuisine" },
                  { to: "/contact", label: "Contact Us" },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className={styles.footerLink}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Places */}
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Top Places</h4>
              <ul className={styles.linkList}>
                {[
                  "Bara Imambara",
                  "Rumi Darwaza",
                  "Chota Imambara",
                  "Hazratganj",
                  "The Residency",
                ].map((place) => (
                  <li key={place}>
                    <Link to="/attractions" className={styles.footerLink}>
                      {place}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>Visit Info</h4>
              <ul className={styles.infoList}>
                <li>
                  <span className={styles.infoIcon}>📍</span>
                  Lucknow, Uttar Pradesh, India
                </li>
                <li>
                  <span className={styles.infoIcon}>✈</span>
                  Chaudhary Charan Singh International Airport
                </li>
                <li>
                  <span className={styles.infoIcon}>🌡</span>
                  Best time: Oct – Mar
                </li>
                <li>
                  <span className={styles.infoIcon}>🗣</span>
                  Languages: Hindi, Urdu
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            © {currentYear} Nawabi Lucknow. Made with ❤ for the City of Nawabs.
          </p>
          <p className={styles.credit}>
            <span className={styles.urdu}>لکھنؤ</span> — City of Tehzeeb
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
