import React from 'react';
import {
	Box,
	Container,
	Grid,
	Stack,
	Typography,
} from '@mui/material';
import useGenerateVideo from 'library/hooks/useGenerateVideo';
import withProtectedRoute from 'library/components/withProtectedRoute';
import Title from './components/Title';
import Player from './components/Player';
import Settings from './components/Settings';

import PreviewUrl from '../../resources/images/Preview.png';

interface IProps {}

const Main: React.FunctionComponent<IProps> = () => {
	const { isLoading, handleGenerateVideo } = useGenerateVideo();

	return (
		<Container maxWidth="xl" sx={{ my: 5, height: '100%' }}>
			{!isLoading && (
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Title />
					</Grid>

					<Grid item xs={8} mt={1}>
						<Player />
					</Grid>

					<Grid item xs={4} mt={1}>
						<Settings handleGenerateVideo={handleGenerateVideo} />
					</Grid>
				</Grid>
			)}
			{isLoading && (
				<Stack
					direction="column"
					spacing={2}
					sx={{
						height: '100%',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Box component="img" src={PreviewUrl} />
					<Typography
						variant="h5"
						sx={{
							position: 'relative',
							color: '#6E7B87',

							'&::after': {
								content: '"."',
								animation: 'ellipsis 1s infinite',
								position: 'absolute',
								right: -21,
								width: 20,
								top: 0,
							},
							'@keyframes ellipsis': {
								'0%': { content: '".  "' },
								'25%': { content: '".. "' },
								'50%': { content: '"..."' },
								'75%': { content: '".. "' },
								'100%': { content: '".  "' },
							},
						}}
					>
						Подготовка видео
					</Typography>
				</Stack>
			)}
		</Container>
	);
};
export default withProtectedRoute(Main);
