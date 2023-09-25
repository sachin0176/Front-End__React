import React, { useState } from "react";
import styles from './Newslleter.module.css';
const Newslleter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }
    // Check for errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, proceed with submission
      console.log("Form data:", formData);
    }
  };

  return (
    <div>
      <div className={styles["newslleter"]}>
        <div className={styles["newslleter-touch"]}>
          <h1>Newslleter</h1>
          <label>Get news about articles and updates in your inbox.</label>
        </div>

        <form className={styles["form-controls"]} onSubmit={handleSubmit}>
          <div className={styles["form-control"]}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <div className={styles["error"]}>{errors.name}</div>
            )}
          </div>

          <div className={styles["form-control"]}>
            <input
              type="email" // Use "email" type for email input
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <div className={styles["error"]}>{errors.email}</div>
            )}
          </div>

          <div className={styles["form-control"]}>
            <input
              type="text" // Use "message" type for email input
              id="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {errors.message && (
              <div className={styles["error"]}>{errors.message}</div>
            )}
          </div>

          <div className={styles["form-control__action"]}>
            <button type="submit">Send</button>
          </div>
        </form>

        <div className={styles["get-in-touch"]}>
          <h1>GET </h1>
          <h1>IN TOUCH</h1>
        </div>
      </div>
      <footer className={styles["footer"]}>
        {" "}
        Copyright 2022 All Right Reserved By SG
      </footer>
    </div>
  );
};


export default Newslleter;
