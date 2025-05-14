export default function GuestDetails({ guest }) {
    return (
        <div>
            <h2>{guest.name}</h2>
            <p>Email: {guest.email}</p>
            <p>Phone: {guest.phone}</p>
            <p>Job: {guest.job}</p>
            <p>Bio: {guest.bio}</p>
        </div>
    );
}