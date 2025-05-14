import { useState } from "react";
import GuestList from "./GuestList.jsx";
import GuestDetails from "./GuestDetails.jsx";
import useQuery from "./UseQuery.jsx";

export default function App() {
  const { data: guests, loading, error } = useQuery();
  const [selectedGuest, setSelectedGuest] = useState(null);

  if (loading) return <p>Loading guests...</p>;
  if (error || !guests) return <p>{error}</p>;

  return (
  <div>
    <h1>Guest List</h1>
    {selectedGuest ? (
      <>
      <GuestDetails guest={selectedGuest} />
      <button onClick={() => setSelectedGuest(null)}>Back to Guest List</button>
      </>
    ) : (
      <GuestList guests={guests} onSelect={setSelectedGuest} />
    )}
  </div>
);
}
