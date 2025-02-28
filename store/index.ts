import { combineReducers, configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./reducers/goalsReducer";

const rootReducer = combineReducers({ goalsReducer });

export const store = configureStore({
  reducer: rootReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
