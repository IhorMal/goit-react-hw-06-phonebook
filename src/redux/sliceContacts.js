import { nanoid } from 'nanoid'
import { createSlice } from "@reduxjs/toolkit";


const steytContact = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  
export const contactsSlice = createSlice({
    name: 'contacts',
initialState: { listContacts: steytContact},
    reducers: {
      createContacts: {
  
        reducer(state, action) {
          state.listContacts.push(action.payload)
        },
        prepare(name, number) {
          return {
            payload: {
              id: nanoid(),
              name,
              number,  
            },
          };
        },
   
      
      },
      createRemove(state, action) {
        return {
          ...state,
          listContacts: state.listContacts.filter(
            contact => contact.id !== action.payload
          ),
        };
      },
    },
});





export const {createContacts, createRemove} = contactsSlice.actions;


