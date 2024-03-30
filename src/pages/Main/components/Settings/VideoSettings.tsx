import React from 'react';
import { Button } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';

import AvatarSelector from 'library/components/AvatarSelector';
import VideoDownload from 'library/components/VideoDownload';

import FemalePictureUrl from '../../../../resources/images/female.png';
import MalePictureUrl from '../../../../resources/images/male.png';

interface IProps {}

const VideoSettings: React.FunctionComponent<IProps> = () => (
	<>
		<VideoDownload />
		<AvatarSelector avatarUrl={FemalePictureUrl} name="Анастасия" />
		<AvatarSelector avatarUrl={MalePictureUrl} name="Геннадий" />
		<Button fullWidth variant="contained" color="primary" sx={{ textTransform: 'capitalize' }} endIcon={<SyncIcon />}>Сгенерировать</Button>
	</>
);

export default VideoSettings;
