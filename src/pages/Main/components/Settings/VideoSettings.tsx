import React from 'react';

import AvatarSelector from 'library/components/AvatarSelector';
import VideoDownload from 'library/components/VideoDownload';

import VIDEO_TYPE from 'library/consts/VideoType';
import FemalePictureUrl from '../../../../resources/images/female.png';
import MalePictureUrl from '../../../../resources/images/male.png';

interface IProps {
	videoType: VIDEO_TYPE;
	videoPath: string;
	handleSelectAvatar(type: VIDEO_TYPE): void;
	handleVideoPath(type: string): void;
}

const VideoSettings: React.FunctionComponent<IProps> = ({
	videoType, videoPath, handleSelectAvatar, handleVideoPath,
}) => (
	<>
		<VideoDownload videoPath={videoPath} setVideoPath={handleVideoPath} />
		<AvatarSelector isSelected={videoType === VIDEO_TYPE.ANASTASIA} avatarUrl={FemalePictureUrl} name="Анастасия" onSelectAvatar={() => handleSelectAvatar(VIDEO_TYPE.ANASTASIA)} />
		<AvatarSelector isSelected={videoType === VIDEO_TYPE.GENNADIY} avatarUrl={MalePictureUrl} name="Геннадий" onSelectAvatar={() => handleSelectAvatar(VIDEO_TYPE.CUSTOM)} />
	</>
);

export default VideoSettings;
