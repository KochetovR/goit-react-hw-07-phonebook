import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import phonebookReducer from './phonebook-reducer';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const middleware = [logger];

// const store = configureStore({
//   reducer: {
//     phonebook: persistReducer(contactsPersistConfig, phonebookReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  // middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// const storeConfig = { persistor, store };

// export default storeConfig;

export default store;
