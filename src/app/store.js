import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import modules from "../modules/modules";
import { reducer } from "../features/features";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(modules);

export default store;
