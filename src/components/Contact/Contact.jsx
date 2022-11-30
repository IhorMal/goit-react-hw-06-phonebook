import { createRemove } from "redux/sliceContacts";
import { useSelector, useDispatch } from "react-redux";




export const Contact = () => {
    const dispatch = useDispatch()
    const newContact = useSelector(store => store)
    return (
        <div>
             {newContact.filter === '' && (
            <ul>
                {newContact.contacts.map(({ name, id, number }) => (
                    <li key={id}>
                        {name}: {number}
                        <button type='button' onClick={() => dispatch(createRemove(id))}>dalet</button>
                    </li>
                ))}
            </ul>
            )}
            
        </div>
    )
};