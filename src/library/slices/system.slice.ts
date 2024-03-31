import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SystemState = {
	isAuthorized: boolean;
	videoContentUrl: string;
}

const initialState: SystemState = {
	isAuthorized: true,
	videoContentUrl: 'https://cdn.jsdelivr.net/gh/SH20RAJ/Sopplayer@main/sample.mp4',
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
		setVideoContentUrl: (state, action: PayloadAction<string>) => ({
			...state,
			videoContentUrl: action.payload,
		}),
		dropVideoContentUrl: (state) => ({
			...state,
			videoContentUrl: initialState.videoContentUrl,
		}),
	},
});

export const {
	logout, login, setVideoContentUrl, dropVideoContentUrl,
} = systemSlice.actions;

export default systemSlice.reducer;
