import { createSlice } from "@reduxjs/toolkit";

const contactFilter = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        contactSearch(state, action) {
            return (state = action.payload);
        },
    }
})

export const {contactSearch} = contactFilter.actions;
export const filterContactsReducer = contactFilter.reducer;