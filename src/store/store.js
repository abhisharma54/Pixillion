import { configureStore } from "@reduxjs/toolkit";
import FavPhotoReducer from "./favPhotoSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "pixillion-root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, FavPhotoReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
