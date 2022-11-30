import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './sliceContacts';
import { filterContactsReducer } from './sliceFilter';

export  const store = configureStore({
    reducer:  {
        contacts: contactsReducer,
        filter: filterContactsReducer,
      }
  });



