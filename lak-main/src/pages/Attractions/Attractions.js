import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { attractions, categories } from "../../data/attractions";
import styles from "./Attractions.module.css";

const Attractions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);

  // Simulate data loading
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setFiltered(attractions);
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // Filter whenever query or category changes
  useEffect(() => {
    const q = searchQuery.toLowerCase().trim();
    const result = attractions.filter((place) => {
      const matchesQuery =
        !q ||
        place.name.toLowerCase().includes(q) ||
        place.description.toLowerCase().includes(q) ||
        place.tags.some((t) => t.toLowerCase().includes(q));

      const matchesCategory =
        activeCategory === "All" || place.category === activeCategory;

      return matchesQuery && matchesCategory;
    });
    setFiltered(result);
  }, [searchQuery, activeCategory]);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Tourist Attractions</span>
          <h1 className={styles.heroTitle}>Explore Lucknow</h1>
          <p className={styles.heroSubtitle}>
            Discover iconic monuments, heritage sites, and hidden gems in the
            City of Nawabs
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <section className={styles.searchSection}>
        <div className={styles.container}>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search attractions..."
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          {loading ? (
            <LoadingSpinner message="Loading attractions..." />
          ) : filtered.length === 0 ? (
            <div className={styles.noResults}>
              <span className={styles.noResultsIcon}>🔍</span>
              <h3>No attractions found</h3>
              <p>Try a different search term or category</p>
              <button
                className={styles.resetBtn}
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <p className={styles.resultCount}>
                Showing <strong>{filtered.length}</strong> of {attractions.length} attractions
              </p>
              <div className={styles.grid}>
                {filtered.map((item) => (
                  <Card key={item.id} item={item} type="attraction" />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Travel Tips */}
      <section className={styles.tipsSection}>
        <div className={styles.container}>
          <h2 className={styles.tipsTitle}>Travel Tips</h2>
          <div className={styles.tipsGrid}>
            {[
              { icon: "🌤", tip: "Best Season", info: "October to March — mild weather, perfect for sightseeing." },
              { icon: "🚌", tip: "Getting Around", info: "Auto-rickshaws, e-rickshaws, and app-based cabs are widely available." },
              { icon: "📸", tip: "Photography", info: "Golden hour (6–8 AM & 4–6 PM) offers the best light for monument photos." },
              { icon: "💰", tip: "Budget", info: "Most monuments cost ₹15–₹500. Combined tickets are available." },
            ].map(({ icon, tip, info }) => (
              <div className={styles.tipCard} key={tip}>
                <span className={styles.tipIcon}>{icon}</span>
                <h4 className={styles.tipTitle}>{tip}</h4>
                <p className={styles.tipInfo}>{info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attractions;
