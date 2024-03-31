import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_VOICE } from 'library/consts/content';
import getVideoUrl from 'library/utils/getVideoUrl';

export type SystemState = {
	isAuthorized: boolean;
	videoContentUrl: string;
}

const initialState: SystemState = {
	isAuthorized: true,
	videoContentUrl: DEFAULT_VOICE,
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
			videoContentUrl: getVideoUrl(action.payload),
		}),
	},
});

export const {
	logout, login, setVideoContentUrl,
} = systemSlice.actions;

export default systemSlice.reducer;
