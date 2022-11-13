import { useState, useEffect} from 'react'
import { Phonebook } from './Phonebook/Phonebook'
import {Contact} from './Contact/Contact'
import { Filter } from './Filter/Filter'
import css from './App.module.css'

   const steytContact = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]

function useContact() {
  const local = JSON.parse(window.localStorage.getItem('contacts'))
  const [steyt, setSteyt] = useState(local ?? steytContact);
  return [steyt, setSteyt] 
}

export const App = () => {
  const [contacts, setContacts] = useContact();
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    const serializedState = JSON.stringify(contacts);
      window.localStorage.setItem('contacts', serializedState);
  }, [contacts]);

  function onNewContact(e) {
    const { value } = e.target;
    setFilter(value)
  };

  function addContactNew(item) {
    setContacts(set => [...set, item])
  }

  function filterContact() {
    return contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase())
    })
  }

  function onDalet(id) {
    let filtet = contacts.filter(value => value.id !== id);
    setContacts(filtet)
  }

  return (
      <div className={css.book}>
         <h1>Phonebook</h1>
         <Phonebook contacts={contacts} addContactNew = {addContactNew} />
         <h2>Contacts</h2>
         <Filter dalet={onDalet} filterContact={filterContact} addFind={onNewContact} filter={filter} />
         <Contact contact={contacts} dalet={onDalet} filter={filter}/>
       </div>
  )
}




// class App extends Component {
//   state = {
//     contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: ''
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       const serializedState = JSON.stringify(this.state.contacts);
//       localStorage.setItem('contacts', serializedState);   
//     }
//   }
  
//   componentDidMount() {
//     const contact = localStorage.getItem('contacts');
//     const contactPars = JSON.parse(contact)
//     if (contactPars) {
//       this.setState({ contacts: contactPars },);
//     } 
//   }
  
//   onNewContact = e => {
    
//     const { name, value = name.value } = e.target
//     console.log(name)
//     console.log(value)
//     this.setState({ [name]: value })
//      console.log(this.state)
//   };

//   addContactNew = (item) => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, item],
//     }))
//   }
  
//   filterContact = () => {
//     const { filter, contacts } = this.state;
//     return contacts.filter(item => {
//       return item.name.toLowerCase().includes(filter.toLowerCase())
//     })
//   }

//   onDalet = (id) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(value => value.id !== id),
//     })) 
//   }

//   render() {
//     const { contacts, filter } = this.state;
//     return (
//       <div className={css.book}>
//         <h1>Phonebook</h1>
//         <Phonebook contacts={contacts} addContact={this.addContact} addContactNew = {this.addContactNew} />
//         <h2>Contacts</h2>
//         <Filter dalet={this.onDalet} filterContact={this.filterContact} addFind={this.onNewContact} filter={filter} />
//         <Contact contact={contacts} dalet={this.onDalet} filter={filter}/>
//       </div>
//     )
//   }
// };

// export {App}