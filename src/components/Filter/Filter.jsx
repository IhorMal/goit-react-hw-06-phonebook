import { createRemove } from "redux/sliceContacts";
import { useSelector, useDispatch } from "react-redux";
import { contactSearch } from "redux/sliceFilter";


export const Filter = () => {
    const dispatch = useDispatch()
    const newContact = useSelector(store => store.contacts.listContacts)
    const filter = useSelector(store => store.filter)

  function filterContact() {
    return newContact.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase())
    })
  }

    return (
    <div>
        <p>Find contacts by name</p>
        <input type="text" name="filter"  onChange={(e) => dispatch(contactSearch(e.target.value))} />
        {filter !== '' && (
            <ul>
            {filterContact().map(({ name, id, number }) => (
                <li key={id}>
                    {name}: {number}
                    <button type='button' onClick={() => dispatch(createRemove(id))}>dalet</button>
                </li>
            ))}
        </ul>
        )}
    </div>
    )
}


// class Filter extends Component {
//     render() {
//         const { filterContact, addFind, filter, dalet } = this.props;
//         const filt = filterContact();
//         return (
//         <div>
//             <p>Find contacts by name</p>
//             <input type="text" name="filter" value={filter} onChange={addFind} />
//             {filter !== '' && (
//                 <ul>
//                 {filt.map(({ name, id, number }) => (
//                     <li key={id}>
//                         {name}: {number}
//                         <button type='button' onClick={() => dalet(id)}>dalet</button>
//                     </li>
//                 ))}
//             </ul>
//             )}

//         </div>
//     )
// }
// };

// export {Filter}