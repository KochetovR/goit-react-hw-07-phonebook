import { useState } from 'react';
import ContactFrom from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import Modal from '../Modal/Modal';

import styles from './Phonebook.module.css';

export default function Phonebook() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.box}>
      <h1>Phonebook</h1>

      <button
        className={styles.modal__button__open}
        type="button"
        onClick={toggleModal}
      >
        Добавить контакт
      </button>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactFrom onClose={toggleModal} />
        </Modal>
      )}

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
