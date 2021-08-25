// import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactShelfAPI from '../services/contactsShelf-api';
import * as phonebookActions from './phonebook-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(phonebookActions.fetchContactsRequest());

  try {
    const contacts = await contactShelfAPI.fetchContacts();
    dispatch(phonebookActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(phonebookActions.fetchContactsError(error));
  }
};

// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchContacts',
//     async (_, {rejectWithValue}) => {
//         try {
//             const contacts = await contactShelfAPI.fetchContacts();
//             return contacts;
//         } catch (error) {
//             return rejectWithValue(error);
//         }

//     },
// );
