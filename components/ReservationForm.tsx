import NeonButton from "./NeonButton";

export default function ReservationForm() {
  return (
    <form className="flex flex-col gap-4 rounded-2xl border border-neutral-200 p-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="guest-name">
          Name
        </label>
        <input
          className="rounded-md border border-neutral-300 px-3 py-2"
          id="guest-name"
          name="name"
          placeholder="Guest name"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="guest-email">
          Email
        </label>
        <input
          className="rounded-md border border-neutral-300 px-3 py-2"
          id="guest-email"
          name="email"
          placeholder="Email address"
          type="email"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="party-size">
            Party Size
          </label>
          <input
            className="rounded-md border border-neutral-300 px-3 py-2"
            id="party-size"
            min={1}
            name="partySize"
            placeholder="2"
            type="number"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium" htmlFor="reservation-date">
            Preferred Date
          </label>
          <input
            className="rounded-md border border-neutral-300 px-3 py-2"
            id="reservation-date"
            name="date"
            type="date"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="reservation-notes">
          Notes
        </label>
        <textarea
          className="rounded-md border border-neutral-300 px-3 py-2"
          id="reservation-notes"
          name="notes"
          placeholder="Celebrations or requests"
          rows={4}
        />
      </div>
      <NeonButton type="submit">Request Reservation</NeonButton>
    </form>
  );
}

