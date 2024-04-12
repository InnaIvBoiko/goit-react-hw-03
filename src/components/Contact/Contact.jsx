// import css from './Contact.module.css';

export default function Contact({contact: {id, name, number}, onDelete}) {
    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
        <button onClick={()=>onDelete(id)}>Delete</button>
        </div>
    );
}