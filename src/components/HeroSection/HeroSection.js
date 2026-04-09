import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

const HeroSection = ({ title, subtitle, ctaText, ctaLink, height, overlay }) => {
  return (
    <div
      className={styles.hero}
      style={{ minHeight: height || "100vh" }}
    >
      <div
        className={styles.overlay}
        style={{ background: overlay || "linear-gradient(135deg, rgba(140,20,20,0.82) 0%, rgba(26,10,10,0.75) 100%)" }}
      />
      <div className={styles.content}>
        <div className={styles.ornament}>⚜ ─────── ⚜</div>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {ctaText && ctaLink && (
          <div className={styles.actions}>
            <Link to={ctaLink} className={styles.cta}>
              {ctaText}
            </Link>
            <Link to="/about" className={styles.ctaSecondary}>
              Learn More
            </Link>
          </div>
        )}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll to explore</span>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  height: PropTypes.string,
  overlay: PropTypes.string,
};

export default HeroSection;
