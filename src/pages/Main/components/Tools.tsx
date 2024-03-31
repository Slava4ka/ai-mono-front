import React, { useMemo } from 'react';
import { Container, Grid } from '@mui/material';
import VideoContext from 'library/utils/VideoContext';
import Title from './Title';
import Player from './Player';
import Settings from './Settings';

interface IProps {}

const Tools: React.FunctionComponent<IProps> = () => {
	const [videoFile, setVideoFile] = React.useState<File>();

	const contextValue = useMemo(() => ({ file: videoFile, setVideoFile }), [videoFile]);

	return (
		<VideoContext.Provider value={contextValue}>
			<Container maxWidth="xl" sx={{ my: 5 }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Title />
					</Grid>

					<Grid item xs={8} mt={1}>
						<Player />
					</Grid>

					<Grid item xs={4} mt={1}>
						<Settings />
					</Grid>
				</Grid>
			</Container>
		</VideoContext.Provider>
	);
};
export default Tools;
