import { combineReducers, configureStore } from '@reduxjs/toolkit';
import systemSlice from 'library/slices/system.slice';

// import systemSlice from 'library/slices/system.slice';

const rootReducer = combineReducers({ systemSlice });

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
