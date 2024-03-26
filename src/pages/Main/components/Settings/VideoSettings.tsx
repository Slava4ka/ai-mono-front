import React from 'react';
import { Button } from '@mui/material';

interface IProps {}

const VideoSettings: React.FunctionComponent<IProps> = () => (
	<Button fullWidth variant="contained" color="primary" sx={{ textTransform: 'capitalize' }}>Сгенерировать</Button>
);

export default VideoSettings;
