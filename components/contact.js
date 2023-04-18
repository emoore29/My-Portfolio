import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xoqzlllz");
  if (state.succeeded) {
    return (
      <p className="text-sm my-7">
        Thanks for your message! I will get back to you as soon as I can.
      </p>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            className="border w-full"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </fieldset>
        <fieldset>
          <label htmlFor="message">Message: </label>
          <textarea
            className="border w-full"
            type="text"
            name="message"
            id="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </fieldset>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </>
  );
}
