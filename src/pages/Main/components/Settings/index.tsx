import React, { useState } from 'react';
import { Stack } from '@mui/material';

import ToggleButton from 'library/components/ToggleButton';
import DATA_TYPE from 'library/consts/DataType';

import VideoSettings from './VideoSettings';
import VoiceSettings from './VoiceSettings';

interface IProps {}

const Settings: React.FunctionComponent<IProps> = () => {
	const [dataType, setDataType] = useState(DATA_TYPE.VOICE);

	const isAvatarSelected = dataType === DATA_TYPE.AVATAR;
	const isVoiceSelected = dataType === DATA_TYPE.VOICE;

	return (
		<Stack direction="column" spacing={3}>
			<Stack direction="row" spacing={2}>
				<ToggleButton isSelected={isAvatarSelected} onClick={() => setDataType(DATA_TYPE.AVATAR)}>Аватар</ToggleButton>
				<ToggleButton isSelected={isVoiceSelected} onClick={() => setDataType(DATA_TYPE.VOICE)}>Голос</ToggleButton>
			</Stack>

			{isAvatarSelected && <VideoSettings />}
			{isVoiceSelected && <VoiceSettings />}
		</Stack>
	);
};

export default Settings;
