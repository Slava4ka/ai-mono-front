import React, { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
	ThemeProvider, createTheme, StyledEngineProvider, ThemeOptions,
} from '@mui/material/styles';

interface IThemeConfig {
  children: React.ReactElement;
}

const ThemeConfig = ({ children }: IThemeConfig) => {
	const themeOptions: ThemeOptions = useMemo(
		() => ({
		}),
		[],
	);

	const theme = createTheme(themeOptions);
	// theme.components = componentsOverride(theme);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default ThemeConfig;
