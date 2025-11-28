import { events, getEventBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

type EventPageParams = {
  "event-slug": string;
};

export function generateStaticParams(): EventPageParams[] {
  return events.map((event) => ({
    "event-slug": event.slug,
  }));
}

export default function EventDetailPage({ params }: { params: EventPageParams }) {
  const event = getEventBySlug(params["event-slug"]);

  if (!event) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">{event.title}</h1>
      <p>{event.description}</p>
      <ul className="space-y-1">
        <li>
          <strong>Date:</strong> {event.date}
        </li>
        <li>
          <strong>Time:</strong> {event.time}
        </li>
        <li>
          <strong>Location:</strong> {event.location}
        </li>
      </ul>
      <p>
        Replace this placeholder text with detailed programming notes, ticketing links, and
        supporting media for {event.title}.
      </p>
    </div>
  );
}

