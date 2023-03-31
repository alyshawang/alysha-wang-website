import styles from "./Contact.module.css";
import { useFormik } from "formik";
import { useState } from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const handleSubmit = (name, data) => {
  fetch("/form.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": name,
      ...data,
    }),
  }).catch((error) => alert(error));
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Please enter a name.";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!values.message) {
    errors.message = "Please enter a message.";
  }

  return errors;
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validate,
    onSubmit: (values, actions) => {
      handleSubmit("contact", values);
      actions.resetForm();
      setSubmitted(true);
    },
  });
  return (
    <section className = {styles.background}> 
    <section className = "m-horizontal" >
        <div className = {styles.container}>
            <div className = {styles.textContainer}>
      <h2 id="contact" className = {styles.title}>
        Contact Me!
      </h2>
      <p className={styles.contact}>I&apos;d love to get in touch.</p>
      </div>
      <div className = {styles.text}>
        <div>
          <form
            name="contact"
            onSubmit={formik.handleSubmit}
            data-netlify="true"
          >
            <div>
              <div className = {styles.err}>
                <input
                  className = {styles.input}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onFocus={() => setSubmitted(false)}
                  value={formik.values.name}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className={styles.errormessage}>{formik.errors.name}</p>
                )}
              </div>
              <div className = {styles.err}>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onFocus={() => setSubmitted(false)}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className={styles.errormessage}>{formik.errors.email}</p>
                )}
              </div>
              <div className = {styles.err}>
                <textarea
                  className={`${styles.input} ${styles.resize}`}
                  rows={10}
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onFocus={() => setSubmitted(false)}
                  value={formik.values.message}
                ></textarea>
                {formik.errors.message && formik.touched.message && (
                  <p className={styles.errormessage}>{formik.errors.message}</p>
                )}
              </div>
              {submitted && (
                <p className={styles.errormessage}>
                  Submitted, I will get back to you soon!
                </p>
              )}
            </div>
            <input className={styles.button} type="submit" value="Submit" />
          </form>
        </div>
      </div>
      </div>

    </section>
    </section>
  );
}
