import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook-actions';
import { getFilterContacts } from '../../redux/phonebook-selectors';
import * as contactsOperations from '../../redux/contactsOperations';

import styles from './ContactItem.module.css';

const ContactItem = () => {
  const contacts = useSelector(getFilterContacts);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookActions.deleteContact(id));

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      {contacts.length > 0 &&
        contacts.map(({ name, number, id }) => (
          <li key={id} className={styles.contact__item}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <button
              type="button"
              onClick={() => onDeleteContact(id)}
              className={styles.contact__button}
            >
              Delete
            </button>
          </li>
        ))}
    </>
  );
};

export default ContactItem;
