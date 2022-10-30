
export const Contact = ({ contact, filter, dalet }) => {
    
    return (
        <div>
             {filter === '' && (
            <ul>
                {contact.map(({ name, id, number }) => (
                    <li key={id}>
                        {name}: {number}
                        <button type='button' onClick={() => dalet(id)}>dalet</button>
                    </li>
                ))}
            </ul>
            )}
            
        </div>
    )
};