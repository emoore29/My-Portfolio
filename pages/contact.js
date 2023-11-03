import { useForm, ValidationError } from "@formspree/react";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Contact() {
  const [state, handleSubmit] = useForm("xoqzlllz");
  if (state.succeeded) {
    return (
      <p className={styles.formThankYou}>
        Thanks for your message! I will get back to you as soon as I can.
      </p>
    );
  }

  return (
    <Layout>
      <h2 id="contact" className={utilStyles.headingMd}>
        Contact
      </h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <fieldset>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" placeholder="Jane Smith" />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="janesmith@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </fieldset>
        <fieldset>
          <label htmlFor="message">Message: </label>
          <textarea
            type="text"
            name="message"
            id="message"
            className={styles.formMessage}
            placeholder="Type your message here and I will get back to you!"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </fieldset>
        <button
          type="submit"
          disabled={state.submitting}
          className={styles.contactSubmitBtn}
        >
          Submit
        </button>
      </form>
    </Layout>
  );
}
