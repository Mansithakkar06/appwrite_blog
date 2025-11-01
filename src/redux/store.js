import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import postReducer from './postSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const combined = combineReducers({
  auth: authReducer,
  post: postReducer,
})
const persistConfig = {
  key: "activeUser",
  storage,
  whitelist:["auth","post"]
}
const persistedReducer = persistReducer(persistConfig, combined)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)