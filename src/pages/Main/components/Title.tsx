import React from 'react';
import { Stack, Typography, Chip } from '@mui/material';

interface IProps {}

const Title: React.FunctionComponent<IProps> = () => (
	<Stack direction="row" spacing={1}>
		<Typography
			variant="h5"
			sx={{
				fontFamily: 'Prosto One',
				fontWeight: 400,
				fontStyle: 'normal',
			}}
		>
			ИИ для создания видео
		</Typography>

		<Chip
			label="Узнайте больше"
			sx={{
				background: 'linear-gradient(90deg, #AF47EA 0%, #32CCCA 82.1%)',
				color: 'white',
				fontWeight: 600,
			}}
		/>
	</Stack>
);

export default Title;
