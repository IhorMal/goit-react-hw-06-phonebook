import { configureStore } from '@reduxjs/toolkit'
import {contactsSlice  } from './sliceContacts';
import { filterContactsReducer } from './sliceFilter';
import storage from 'redux-persist/lib/storage';

import {
  persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


  const persistConfig = {
    key: 'contacts',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer)
  


export  const store = configureStore({
    reducer:  {
        contacts: persistedReducer,
        filter: filterContactsReducer,
      },
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),

  });




 export const persistor = persistStore(store)
