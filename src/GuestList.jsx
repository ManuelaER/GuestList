export default function GuestList({ guests, onSelect }) {
    return (
      <ul>
        {guests.map((guest) => (
          <li key={guest.id} onClick={() => onSelect(guest)}>
            <strong>{guest.name}</strong> - {guest.email}
          </li> 
        ))}
        <h3>Select a guest for more details!</h3>
      </ul>
    );
}