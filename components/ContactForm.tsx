import NeonButton from "./NeonButton";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4 rounded-2xl border border-neutral-200 p-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="contact-name">
          Name
        </label>
        <input
          className="rounded-md border border-neutral-300 px-3 py-2"
          id="contact-name"
          name="name"
          placeholder="Your name"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="contact-email">
          Email
        </label>
        <input
          className="rounded-md border border-neutral-300 px-3 py-2"
          id="contact-email"
          name="email"
          placeholder="you@example.com"
          type="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="contact-message">
          Message
        </label>
        <textarea
          className="rounded-md border border-neutral-300 px-3 py-2"
          id="contact-message"
          name="message"
          placeholder="How can we help?"
          rows={5}
        />
      </div>
      <NeonButton type="submit">Send Message</NeonButton>
    </form>
  );
}

