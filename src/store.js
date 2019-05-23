import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import  rootReducer  from './redux/reducer/index';

const persistConfig = {
    key: 'root',
    storage
}

const persisterReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persisterReducer);
const persistor = persistStore( store );

export { store, persistor }