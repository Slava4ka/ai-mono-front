import React from 'react';
import { Box, Stack } from '@mui/material';
import withProtectedRoute from 'library/components/withProtectedRoute';
import ApplicationBar from 'library/components/ApplicationBar';
import Footer from 'library/components/Footer';
import Tools from './components/Tools';

interface IProps {}

const Main: React.FunctionComponent<IProps> = () => (
	<Stack direction="column" sx={{ width: '100%' }}>
		<ApplicationBar />
		<Box sx={{ flexGrow: 1 }}>
			<Tools />
		</Box>
		<Footer />
	</Stack>
);

export default withProtectedRoute(Main);
