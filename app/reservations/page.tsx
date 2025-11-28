import ReservationForm from "@/components/ReservationForm";

export default function ReservationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Reservations</h1>
      <p>Guests can request a table, private booth, or lounge experience using this form.</p>
      <ReservationForm />
    </div>
  );
}

