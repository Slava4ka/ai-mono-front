import React from 'react';
import { Container, Grid } from '@mui/material';
import Title from './Title';
import Player from './Player';
import Settings from './Settings';

interface IProps {}

// const [step, setStep] = useState(STEPS.EDIT);
const Tools: React.FunctionComponent<IProps> = () => (
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
);
export default Tools;
