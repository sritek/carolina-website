import type { Event } from "@/types/event";
import NeonButton from "./NeonButton";

type EventCardProps = {
  event: Event;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-neutral-200 p-5">
      <p className="text-xs uppercase tracking-widest text-neutral-500">
        {event.date} · {event.time}
      </p>
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p className="text-sm text-neutral-600">{event.description}</p>
      <p className="text-sm font-medium">{event.location}</p>
      <NeonButton className="mt-auto" href={`/events/${event.slug}`}>
        View Details
      </NeonButton>
    </article>
  );
}

