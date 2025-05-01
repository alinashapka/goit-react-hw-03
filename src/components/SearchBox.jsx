export default function SearchBox({ text, onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <p>Find contacts by name</p>
            <input type="text" value={text} onChange={handleChange}></input>
        </div>
    );
}