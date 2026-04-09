import React from "react";
import styles from "./About.module.css";

const culturalAspects = [
  {
    icon: "🎭",
    title: "Kathak Dance",
    desc: "Lucknow's gharana of Kathak — a classical Indian dance form — is world-renowned for its lyrical grace, elaborate footwork, and expressive abhinaya.",
  },
  {
    icon: "🪡",
    title: "Chikankari Embroidery",
    desc: "The delicate white-on-white embroidery on fine muslin, dating to the Mughal era, is Lucknow's signature craft and a UNESCO-recognized art form.",
  },
  {
    icon: "📜",
    title: "Urdu Poetry",
    desc: "Lucknow has been the cradle of Urdu literature, mushairah (poetry symposia), and some of India's greatest ghazal and nazm poets.",
  },
  {
    icon: "🥁",
    title: "Nawabi Music",
    desc: "Classical Hindustani music and thumri flourished under royal patronage. Wajid Ali Shah himself was a musician and composer.",
  },
  {
    icon: "🍲",
    title: "Awadhi Cuisine",
    desc: "The dum-pukht cooking style — slow-cooking in sealed vessels — originated here and influenced Indian culinary traditions worldwide.",
  },
  {
    icon: "🤝",
    title: "Tehzeeb",
    desc: "The famous Lucknawi tehzeeb (etiquette and refinement) — exemplified by 'Pehle aap' (after you) — is a living cultural tradition of courtesy.",
  },
];

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.about}>
      {/* Page Hero */}
      <div className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>About the City</span>
          <h1 className={styles.heroTitle}>The City of Nawabs</h1>
          <p className={styles.heroSubtitle}>
            Exploring the rich history and cultural legacy of Lucknow — a city where
            the past is never quite past
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <span className={styles.label}>Introduction</span>
              <h2 className={styles.sectionTitle}>A City Unlike Any Other</h2>
              <p>
                Lucknow, the capital of Uttar Pradesh, is a city that wears its history
                with grace. Known as the "City of Nawabs" or "Nagar of Tehzeeb", it was
                the seat of the Nawabs of Awadh — rulers who presided over one of the
                most cultured courts in the Indian subcontinent.
              </p>
              <p>
                From the architectural marvels of the Mughal-Nawabi era to the fragrant
                lanes of its bazaars, Lucknow is a sensory experience — where the past
                seamlessly blends with the present. The city's cuisine, art, music, and
                language reflect centuries of refinement under royal patronage.
              </p>
              <p>
                Today, Lucknow is a modern metropolis of over 4 million people, yet it
                remains deeply rooted in its heritage, earning it the nickname
                "Lakhnau" — the land of lakhs of hearts.
              </p>
              <div className={styles.introStats}>
                <div className={styles.introStat}>
                  <strong>Founded</strong>
                  <span>~12th Century</span>
                </div>
                <div className={styles.introStat}>
                  <strong>Population</strong>
                  <span>4+ Million</span>
                </div>
                <div className={styles.introStat}>
                  <strong>Language</strong>
                  <span>Hindi, Urdu</span>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
              <img
                src="https://picsum.photos/seed/lucknow-about/600/700"
                alt="Historic Lucknow"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className={styles.imageCaption}>
                ⚜ The timeless charm of Lucknow
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className={styles.cultureSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Living Heritage</span>
            <h2 className={styles.sectionTitle}>Cultural Significance</h2>
            <p className={styles.sectionSubtitle}>
              The soul of Lucknow lives in its art forms, cuisine, and the gentle
              refinement of its people
            </p>
          </div>
          <div className={styles.cultureGrid}>
            {culturalAspects.map(({ icon, title, desc }) => (
              <div className={styles.cultureCard} key={title}>
                <div className={styles.cultureIcon}>{icon}</div>
                <div className={styles.cultureContent}>
                  <h3 className={styles.cultureTitle}>{title}</h3>
                  <p className={styles.cultureDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className={styles.quoteSection}>
        <div className={styles.container}>
          <blockquote className={styles.quote}>
            "Lucknow is not just a place — it is a feeling, a warmth, a refined way
            of living that you carry with you forever."
          </blockquote>
          <p className={styles.quoteAttr}>— A traveller's observation</p>
        </div>
      </section>
    </div>
  );
};

export default About;
