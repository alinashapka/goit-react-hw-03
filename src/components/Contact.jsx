export default function Contact({ contact, onDelete}) {
    const handleDelete = () => {
        onDelete(contact);
    }
    return (
            <>
            <p>{contact.name}</p>
                <p>{contact.number}</p>
                <button onClick={handleDelete}>Delete</button>
            </>
    );
}