import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as phonebookActions from './phonebook-actions';
// import { fetchContacts } from './contactsOperations'

const BASE_URL = 'http://localhost:3002';

function addContact(contact) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  };
  return fetch(`${BASE_URL}/contacts`, options).then(res => res.json());
}

function removeContact(contactId) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/contacts/${contactId}`, options).then(res =>
    res.json(),
  );
}

const contacts = createReducer([], {
  [phonebookActions.fetchContactsSuccess]: (_, action) => action.payload,
  [phonebookActions.addContact]: (state, { payload }) => {
    const nameContact = state.map(el => el.name.toLowerCase());
    if (nameContact.includes(payload.name.toLowerCase())) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    addContact(payload);
    return [...state, payload];
  },

  [phonebookActions.deleteContact]: (state, { payload }) => {
    removeContact(payload);
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [phonebookActions.filterContacts]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [phonebookActions.fetchContactsError]: (_, action) => action.payload,
  [phonebookActions.fetchContactsRequest]: () => null,
});

// const contacts = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
//   [phonebookActions.addContact]: (state, { payload }) => {
//     const nameContact = state.map(el => el.name.toLowerCase());
//     if (nameContact.includes(payload.name.toLowerCase())) {
//       alert(`${payload.name} is already in contacts`);
//       return state;
//     }
//     addContact(payload);
//     return [...state, payload];
//   },

//   [phonebookActions.deleteContact]: (state, { payload }) => {
//     removeContact(payload);
//     return state.filter(({ id }) => id !== payload)
//   },
// })

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
// })

export default combineReducers({
  contacts,
  filter,
  error,
});
