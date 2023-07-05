
import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlise";
import { contactsReducer } from "./contactsSlice";
//import { contactsReducer, filterReducer } from "./reducer";
// import {combineReducers} from "@reduxjs/toolkit";
// import {
//     persistStore, persistReducer, 
//     FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from 'redux-persist/lib/storage';


// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };
// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer)



// export const store = configureStore({
//     reducer: persistedReducer,
     
//      middleware(getDefaultMiddleware) {
    
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });

//   }
// });

// export const persistor = persistStore(store);

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

//const enhancer = devToolsEnhancer();

export const store = configureStore({
    reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
}});