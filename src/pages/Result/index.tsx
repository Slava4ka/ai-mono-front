import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
	Button, Container, Stack, Typography,
} from '@mui/material';
import { isNotNil } from 'ramda';
import { isEmpty } from 'lodash';

import withProtectedRoute from 'library/components/withProtectedRoute';
import Player from 'pages/Main/components/Player';
import { getVideoResultUrl } from 'library/utils/getVideoUrl';

interface IProps {}

const Result: React.FunctionComponent<IProps> = () => {
	const params = useParams();

	const navigate = useNavigate();

	return (
		<Container maxWidth="xl" sx={{ my: 5, height: '100%' }}>
			<Stack direction="column" spacing={2} sx={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
				{(isNotNil(params.file_name) && !isEmpty(params.file_name)) ? (
					<Player url={getVideoResultUrl(params.file_name)} />
				) : (
					<Typography variant="h2" sx={{ fontWeight: 'bold', color: '#545b60' }}>Что-то пошло не так</Typography>
				)}
				<Button variant="contained" sx={{ background: 'linear-gradient(90deg, #4788EA 0%, #32CCCA 82.1%)' }} onClick={() => navigate('/app/main')}>
					Создать новое видео
				</Button>
			</Stack>
		</Container>

	);
};

export default withProtectedRoute(Result);
