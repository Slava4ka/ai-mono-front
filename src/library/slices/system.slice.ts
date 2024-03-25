import { createSlice } from '@reduxjs/toolkit';

export type SystemState = {
	isAuthorized: boolean;
}

const initialState: SystemState = {
	isAuthorized: true,
};

const systemSlice = createSlice({
	name: 'system',
	initialState,
	reducers: {
		logout: () => initialState,
		login: (state) => ({
			...state,
			isAuthorized: true,
		}),
	},
});

export const { logout, login } = systemSlice.actions;

export default systemSlice.reducer;
