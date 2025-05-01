import Contact from "./Contact";

export default function ContactList({contacts, onDelete}) {
    return (<ul>
        {contacts.map(contact => (<li key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
        </li>))}
</ul>)
};