import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import rootReducer from './redux/reducer/index';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['navigation']
}

const persisterReducer = persistReducer(persistConfig, rootReducer);

const navigation = createReactNavigationReduxMiddleware(

    state => state.navigation
);

const store = createStore(persisterReducer, applyMiddleware(logger, navigation));
const persistor = persistStore(store);

export { store, persistor }