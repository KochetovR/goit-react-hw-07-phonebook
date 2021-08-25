import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('phonebook/add', ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: uuidv4(),
    },
  };
});

export const deleteContact = createAction('phonebook/delete');
export const filterContacts = createAction('phonebook/changeFilter');

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);

export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);

export const fetchContactsError = createAction('contacts/fetchContactsError');
