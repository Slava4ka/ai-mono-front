import React from 'react';
import { Outlet} from 'react-router-dom';
import { Stack, Box } from '@mui/material';

import ApplicationBar from '../ApplicationBar';
import Footer from '../Footer';

interface IProps {}

const Template: React.FunctionComponent<IProps> = () => (
	<Stack direction="column" sx={{ width: '100%' }}>
		<ApplicationBar />
		<Box sx={{ flexGrow: 1 }}>
			<Outlet />
		</Box>
		<Footer />
	</Stack>
);

export default Template;
