import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { foods, foodCategories } from "../../data/foods";
import styles from "./Food.module.css";

const Food = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [mustTryOnly, setMustTryOnly] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setFiltered(foods);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const q = searchQuery.toLowerCase().trim();
    const result = foods.filter((food) => {
      const matchesQuery =
        !q ||
        food.name.toLowerCase().includes(q) ||
        food.description.toLowerCase().includes(q) ||
        food.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCategory =
        activeCategory === "All" || food.category === activeCategory;
      const matchesMustTry = !mustTryOnly || food.mustTry;
      return matchesQuery && matchesCategory && matchesMustTry;
    });
    setFiltered(result);
  }, [searchQuery, activeCategory, mustTryOnly]);

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Awadhi Cuisine</span>
          <h1 className={styles.heroTitle}>Food of Lucknow</h1>
          <p className={styles.heroSubtitle}>
            Experience the royal flavours of Awadh — where every dish is a
            centuries-old recipe and every bite tells a story
          </p>
        </div>
      </div>

      {/* Intro strip */}
      <div className={styles.introStrip}>
        <div className={styles.container}>
          <div className={styles.stripGrid}>
            {[
              { icon: "🔥", text: "Dum-pukht cooking style" },
              { icon: "🌿", text: "100+ spice blends" },
              { icon: "👑", text: "Royal Nawabi recipes" },
              { icon: "🍽", text: "Vegetarian & Non-veg" },
            ].map(({ icon, text }) => (
              <div className={styles.stripItem} key={text}>
                <span>{icon}</span> {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <section className={styles.searchSection}>
        <div className={styles.container}>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search dishes..."
            categories={foodCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <div className={styles.toggleRow}>
            <label className={styles.mustTryToggle}>
              <input
                type="checkbox"
                checked={mustTryOnly}
                onChange={(e) => setMustTryOnly(e.target.checked)}
              />
              <span className={styles.toggleSlider} />
              <span className={styles.toggleLabel}>Must-Try Dishes Only ⭐</span>
            </label>
          </div>
        </div>
      </section>

      {/* Food Grid */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          {loading ? (
            <LoadingSpinner message="Preparing the menu..." />
          ) : filtered.length === 0 ? (
            <div className={styles.noResults}>
              <span className={styles.noResultsIcon}>🍽</span>
              <h3>No dishes found</h3>
              <p>Try adjusting your filters</p>
              <button
                className={styles.resetBtn}
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                  setMustTryOnly(false);
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <p className={styles.resultCount}>
                Showing <strong>{filtered.length}</strong> of {foods.length} dishes
              </p>
              <div className={styles.grid}>
                {filtered.map((item) => (
                  <Card key={item.id} item={item} type="food" />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Where to Eat */}
      <section className={styles.eatSection}>
        <div className={styles.container}>
          <h2 className={styles.eatTitle}>Where to Eat in Lucknow</h2>
          <div className={styles.eatGrid}>
            {[
              {
                name: "Tunday Kababi",
                area: "Aminabad / Hazratganj",
                specialty: "Galouti & Seekh Kebabs",
                since: "Est. 1905",
                icon: "🏪",
              },
              {
                name: "Idris Ki Biryani",
                area: "Aminabad",
                specialty: "Dum Biryani",
                since: "Est. 1955",
                icon: "🍚",
              },
              {
                name: "Raheem's",
                area: "Chowk",
                specialty: "Nihari Kulcha, Kebabs",
                since: "Est. 1870s",
                icon: "🍽",
              },
              {
                name: "Chowk Area",
                area: "Old Lucknow",
                specialty: "Basket Chaat, Street Food",
                since: "Year-round",
                icon: "🛒",
              },
            ].map(({ name, area, specialty, since, icon }) => (
              <div className={styles.eatCard} key={name}>
                <span className={styles.eatIcon}>{icon}</span>
                <div className={styles.eatInfo}>
                  <h4 className={styles.eatName}>{name}</h4>
                  <p className={styles.eatArea}>📍 {area}</p>
                  <p className={styles.eatSpecialty}>⭐ {specialty}</p>
                  <p className={styles.eatSince}>{since}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;
