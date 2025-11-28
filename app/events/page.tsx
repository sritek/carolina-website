import EventCard from "@/components/EventCard";
import SectionHeading from "@/components/SectionHeading";
import { events } from "@/lib/data";

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Events</h1>
      <p>
        The events listing highlights residencies, culinary collaborations, and late-night
        programming.
      </p>
      <div className="space-y-4">
        <SectionHeading
          eyebrow="This Month"
          title="Experience calendar"
          description="Update the placeholder data in lib/data.ts as new programming is confirmed."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {events.map((event) => (
            <EventCard event={event} key={event.slug} />
          ))}
        </div>
      </div>
    </div>
  );
}

