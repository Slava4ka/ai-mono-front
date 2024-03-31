import React from 'react';

import AvatarSelector from 'library/components/AvatarSelector';
import VideoDownload from 'library/components/VideoDownload';

import { FEMALE_AVATAR_NAME, MALE_AVATAR_NAME } from 'library/consts/content';
import FemalePictureUrl from '../../../../resources/images/female.png';
import MalePictureUrl from '../../../../resources/images/male.png';

interface IProps {
	videoPath: string;
	handleVideoPath(type: string): void;
}

const VideoSettings: React.FunctionComponent<IProps> = ({
	videoPath, handleVideoPath,
}) => (
	<>
		<VideoDownload videoPath={videoPath} setVideoPath={handleVideoPath} />
		<AvatarSelector isSelected={videoPath === FEMALE_AVATAR_NAME} avatarUrl={FemalePictureUrl} name="Анастасия" onSelectAvatar={() => handleVideoPath(FEMALE_AVATAR_NAME)} />
		<AvatarSelector isSelected={videoPath === MALE_AVATAR_NAME} avatarUrl={MalePictureUrl} name="Геннадий" onSelectAvatar={() => handleVideoPath(MALE_AVATAR_NAME)} />
	</>
);

export default VideoSettings;
