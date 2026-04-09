import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  else if (form.name.trim().length < 2) errors.name = "Name must be at least 2 characters";

  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Please enter a valid email";

  if (!form.subject.trim()) errors.subject = "Subject is required";

  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";

  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Live validation for touched fields
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      const newErrors = validate(form);
      const relevantErrors = {};
      Object.keys(touched).forEach((key) => {
        if (newErrors[key]) relevantErrors[key] = newErrors[key];
      });
      setErrors(relevantErrors);
    }
  }, [form, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(initialForm).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);
      setTouched({});
      setErrors({});
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm(initialForm);
    setTouched({});
    setErrors({});
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.pageHero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Get in Touch</span>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Planning a trip to Lucknow? Have a question? We'd love to hear from you.
          </p>
        </div>
      </div>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Info Panel */}
            <div className={styles.infoPanel}>
              <h2 className={styles.infoTitle}>Visit Lucknow</h2>
              <p className={styles.infoText}>
                The City of Nawabs welcomes you with warmth and the spirit of
                "Pehle Aap". Reach out for travel tips, itinerary suggestions,
                or any queries about this beautiful city.
              </p>

              <div className={styles.contactDetails}>
                {[
                  { icon: "📍", label: "Location", value: "Lucknow, Uttar Pradesh, India – 226001" },
                  { icon: "✈", label: "Nearest Airport", value: "Chaudhary Charan Singh International Airport" },
                  { icon: "🚉", label: "Railway", value: "Lucknow Charbagh Railway Station" },
                  { icon: "🌐", label: "Region", value: "North India, Indo-Gangetic Plains" },
                  { icon: "🗣", label: "Languages", value: "Hindi, Urdu, Awadhi" },
                ].map(({ icon, label, value }) => (
                  <div className={styles.detailItem} key={label}>
                    <span className={styles.detailIcon}>{icon}</span>
                    <div>
                      <strong className={styles.detailLabel}>{label}</strong>
                      <p className={styles.detailValue}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialBox}>
                <p className={styles.socialTitle}>Follow Nawabi Lucknow</p>
                <div className={styles.socialLinks}>
                  {["𝕏 Twitter", "f Facebook", "▶ YouTube", "📸 Instagram"].map((s) => (
                    <a key={s} href="#" className={styles.socialBtn}>
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formPanel}>
              {submitted ? (
                <div className={styles.successCard}>
                  <div className={styles.successIcon}>✅</div>
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. We'll get back to you soon with all the
                    information about beautiful Lucknow!
                  </p>
                  <button className={styles.sendAnother} onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <h2 className={styles.formTitle}>Send a Message</h2>
                  <p className={styles.formSubtitle}>
                    We typically respond within 24 hours.
                  </p>

                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="name">
                        Full Name <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={`${styles.input} ${errors.name ? styles.inputError : touched.name && !errors.name ? styles.inputSuccess : ""}`}
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your full name"
                        autoComplete="name"
                      />
                      {errors.name && (
                        <span className={styles.errorMsg}>⚠ {errors.name}</span>
                      )}
                    </div>

                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="email">
                        Email Address <span className={styles.required}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={`${styles.input} ${errors.email ? styles.inputError : touched.email && !errors.email ? styles.inputSuccess : ""}`}
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="your@email.com"
                        autoComplete="email"
                      />
                      {errors.email && (
                        <span className={styles.errorMsg}>⚠ {errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="subject">
                      Subject <span className={styles.required}>*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className={`${styles.input} ${styles.select} ${errors.subject ? styles.inputError : touched.subject && !errors.subject ? styles.inputSuccess : ""}`}
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select a subject...</option>
                      <option>Travel Planning</option>
                      <option>Attractions Information</option>
                      <option>Food & Restaurants</option>
                      <option>Cultural Events</option>
                      <option>Accommodation Help</option>
                      <option>General Enquiry</option>
                    </select>
                    {errors.subject && (
                      <span className={styles.errorMsg}>⚠ {errors.subject}</span>
                    )}
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="message">
                      Message <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : touched.message && !errors.message ? styles.inputSuccess : ""}`}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us about your plans or ask your question..."
                      rows={5}
                    />
                    <div className={styles.charCount}>
                      {form.message.length} characters
                      {errors.message && (
                        <span className={styles.errorMsg}>⚠ {errors.message}</span>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`${styles.submitBtn} ${submitting ? styles.submitting : ""}`}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span className={styles.btnLoader}>
                        <span className={styles.dotLoader} /> Sending...
                      </span>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
