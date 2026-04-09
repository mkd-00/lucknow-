import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ item, type }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isAttraction = type === "attraction";
  const isFood = type === "food";

  const fallbackBg = isAttraction
    ? "linear-gradient(135deg, #8c1414, #c0392b)"
    : "linear-gradient(135deg, #b7410e, #e67e22)";

  return (
    <div className={`${styles.card} ${expanded ? styles.expanded : ""}`}>
      <div className={styles.imageWrapper}>
        {!imgError ? (
          <img
            src={item.image}
            alt={item.name}
            className={styles.image}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className={styles.imageFallback} style={{ background: fallbackBg }}>
            <span className={styles.fallbackIcon}>
              {isAttraction ? "🏛" : "🍽"}
            </span>
          </div>
        )}
        <div className={styles.imageOverlay} />
        <div className={styles.badges}>
          <span className={styles.categoryBadge}>{item.category}</span>
          {(item.mustTry || isAttraction) && (
            <span className={styles.hotBadge}>
              {isFood && item.mustTry ? "⭐ Must Try" : ""}
            </span>
          )}
        </div>
        {isFood && item.spiceLevel && (
          <div className={styles.spiceBadge}>
            🌶 {item.spiceLevel}
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{item.name}</h3>
          <div className={styles.rating}>
            <span className={styles.star}>★</span>
            <span className={styles.ratingVal}>{item.rating}</span>
          </div>
        </div>

        <p className={styles.description}>
          {expanded ? item.longDescription || item.description : item.description}
        </p>

        <div className={styles.tags}>
          {item.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        {isAttraction && (
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>🕐</span>
              <span className={styles.metaText}>{item.timings}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>🎟</span>
              <span className={styles.metaText}>{item.entryFee}</span>
            </div>
          </div>
        )}

        {isFood && (
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>📜</span>
              <span className={styles.metaText}>{item.origin}</span>
            </div>
          </div>
        )}

        {(item.longDescription || isAttraction) && (
          <button
            className={styles.expandBtn}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Show Less ▲" : "Read More ▼"}
          </button>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    timings: PropTypes.string,
    entryFee: PropTypes.string,
    origin: PropTypes.string,
    mustTry: PropTypes.bool,
    spiceLevel: PropTypes.string,
  }).isRequired,
  type: PropTypes.oneOf(["attraction", "food"]).isRequired,
};

export default Card;
