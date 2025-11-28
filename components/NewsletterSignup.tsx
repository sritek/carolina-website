export default function NewsletterSignup() {
  return (
    <form className="flex flex-col gap-3 rounded-2xl border border-neutral-200 p-6 md:flex-row md:items-center">
      <div className="flex-1">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          className="w-full rounded-full border border-neutral-300 px-4 py-2"
          id="newsletter-email"
          name="email"
          placeholder="Join the newsletter"
          type="email"
        />
      </div>
      <button className="rounded-full px-6 py-2 text-sm font-semibold" type="submit">
        Subscribe
      </button>
    </form>
  );
}

