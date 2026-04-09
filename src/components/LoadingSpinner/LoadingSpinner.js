import React from "react";
import PropTypes from "prop-types";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = ({ message }) => (
  <div className={styles.wrapper}>
    <div className={styles.spinner}>
      <div className={styles.ring} />
      <div className={styles.ring} />
      <div className={styles.ring} />
      <div className={styles.dot} />
    </div>
    {message && <p className={styles.message}>{message}</p>}
  </div>
);

LoadingSpinner.propTypes = {
  message: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  message: "Loading...",
};

export default LoadingSpinner;
