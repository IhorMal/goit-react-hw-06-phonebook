import { Component } from 'react'
import { Phonebook } from './Phonebook/Phonebook'
import {Contact} from './Contact/Contact'
import { Filter } from './Filter/Filter'
import css from './App.module.css'


class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  onNewContact = e => {
    const {name, value = name.value} = e.target
    this.setState({[name]: value})
  };

  addContactNew = (item) => {
    this.setState(prevState => ({
    contacts: [...prevState.contacts, item]
    }))
  }
  
  filterContact = (e) => {
    const {filter, contacts} = this.state;
    return contacts.filter(item => {
      return item.name.toLowerCase().includes(filter.toLowerCase())
    })
  }

  onDalet = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(value => value.id !== id),
    }))
  }

  render() {
    const {contacts, filter} = this.state
    return (
      <div className={css.book}>
        <h1>Phonebook</h1>
        <Phonebook contacts={contacts} addContact={this.addContact} addContactNew = {this.addContactNew} />
        <h2>Contacts</h2>
        <Filter dalet={this.onDalet} filterContact={this.filterContact} addFind={this.onNewContact} filter={filter} />
        <Contact contact={contacts} dalet={this.onDalet} filter={filter}/>
      </div>
    )
  }
};

export {App}