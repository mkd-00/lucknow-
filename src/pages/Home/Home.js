import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./Home.module.css";

const highlights = [
  {
    icon: "🏛",
    title: "Rich Heritage",
    desc: "Explore Mughal-Nawabi architecture spanning over 300 years of royal history.",
    link: "/attractions",
  },
  {
    icon: "🍽",
    title: "Awadhi Cuisine",
    desc: "Savour the legendary Dum Biryani, Galouti Kebabs, and street-side chaats.",
    link: "/food",
  },
  {
    icon: "🎭",
    title: "Living Culture",
    desc: "Experience Kathak, Chikankari craft, and the refined 'Tehzeeb' of Lucknow.",
    link: "/about",
  },
  {
    icon: "🌺",
    title: "Nawabi Elegance",
    desc: "Witness the grace and etiquette inherited from centuries of Nawabi rule.",
    link: "/about",
  },
];

const stats = [
  { value: "300+", label: "Years of History" },
  { value: "50+", label: "Heritage Sites" },
  { value: "100+", label: "Iconic Dishes" },
  { value: "2M+", label: "Annual Visitors" },
];

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [counterVal, setCounterVal] = useState(stats.map(() => 0));

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setVisible(true), 300);

    // Animate counters after section comes into view
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    const statsEl = document.getElementById("stats-section");
    if (statsEl) obs.observe(statsEl);

    return () => {
      clearTimeout(timer);
      obs.disconnect();
    };
  }, []);

  const animateCounters = () => {
    const targets = [300, 50, 100, 2];
    targets.forEach((target, i) => {
      let start = 0;
      const step = Math.ceil(target / 40);
      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCounterVal((prev) => {
          const updated = [...prev];
          updated[i] = start;
          return updated;
        });
      }, 30);
    });
  };

  return (
    <div className={styles.home}>
      {/* Hero */}
      <HeroSection
        title="Welcome to Lucknow"
        subtitle="The City of Nawabs — where history whispers through every archway, and every meal is a royal feast. Discover tehzeeb, taste, and timeless traditions."
        ctaText="Explore Attractions"
        ctaLink="/attractions"
      />

      {/* Highlights */}
      <section className={`${styles.highlights} ${visible ? styles.visible : ""}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Discover</span>
            <h2 className={styles.sectionTitle}>Why Visit Lucknow?</h2>
            <p className={styles.sectionSubtitle}>
              A city that seamlessly blends the grandeur of its Nawabi past with the vibrancy of modern India
            </p>
          </div>
          <div className={styles.highlightGrid}>
            {highlights.map(({ icon, title, desc, link }) => (
              <Link to={link} className={styles.highlightCard} key={title}>
                <div className={styles.highlightIcon}>{icon}</div>
                <h3 className={styles.highlightTitle}>{title}</h3>
                <p className={styles.highlightDesc}>{desc}</p>
                <span className={styles.highlightArrow}>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection} id="stats-section">
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map(({ value, label }, i) => (
              <div className={styles.statItem} key={label}>
                <div className={styles.statValue}>
                  {counterVal[i]}
                  {value.includes("+") ? "+" : value.includes("M") ? "M+" : ""}
                </div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Banners */}
      <section className={styles.featureBanners}>
        <div className={styles.container}>
          <div className={styles.bannerGrid}>
            <Link to="/attractions" className={`${styles.banner} ${styles.bannerLarge}`}>
              <div className={styles.bannerOverlay} />
              <div className={styles.bannerContent}>
                <span className={styles.bannerLabel}>Heritage</span>
                <h3 className={styles.bannerTitle}>Bara Imambara</h3>
                <p className={styles.bannerDesc}>
                  Marvel at the world's largest arched hall built without steel or wood
                </p>
                <span className={styles.bannerLink}>Visit Now →</span>
              </div>
            </Link>

            <div className={styles.bannerStack}>
              <Link to="/food" className={`${styles.banner} ${styles.bannerSmall}`}>
                <div className={styles.bannerOverlay} />
                <div className={styles.bannerContent}>
                  <span className={styles.bannerLabel}>Food</span>
                  <h3 className={styles.bannerTitle}>Awadhi Cuisine</h3>
                  <span className={styles.bannerLink}>Taste Now →</span>
                </div>
              </Link>
              <Link to="/about" className={`${styles.banner} ${styles.bannerSmall}`}>
                <div className={styles.bannerOverlay} />
                <div className={styles.bannerContent}>
                  <span className={styles.bannerLabel}>Culture</span>
                  <h3 className={styles.bannerTitle}>Tehzeeb & Tradition</h3>
                  <span className={styles.bannerLink}>Learn More →</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className={styles.quoteBanner}>
        <div className={styles.container}>
          <blockquote className={styles.quote}>
            <span className={styles.quoteMarks}>"</span>
            Pehle aap — After you. The spirit of Lucknow lives in its courtesy,
            its warmth, and its never-ending hospitality.
            <span className={styles.quoteMarks}>"</span>
          </blockquote>
          <p className={styles.quoteAttr}>— The Nawabi Etiquette of Lucknow</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
