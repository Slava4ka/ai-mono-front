import React, { useState } from 'react';
import { Stack, Button } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import { useForm } from 'react-hook-form';

import ToggleButton from 'library/components/ToggleButton';
import DATA_TYPE from 'library/consts/DataType';
import GENDER from 'library/consts/Gender';
import LANGUAGE from 'library/consts/Language';

import VIDEO_TYPE from 'library/consts/VideoType';
import { isEmpty } from 'ramda';
import VideoSettings from './VideoSettings';
import VoiceSettings from './VoiceSettings';

interface IFormData {
	gender?: GENDER;
	language?: LANGUAGE;
	audioPath?: string;
	text: string;
	videoType: VIDEO_TYPE;
	videoPath: string;
}

interface IProps {}

const Settings: React.FunctionComponent<IProps> = () => {
	const [dataType, setDataType] = useState(DATA_TYPE.AVATAR);

	const isAvatarSelected = dataType === DATA_TYPE.AVATAR;
	const isVoiceSelected = dataType === DATA_TYPE.VOICE;

	const { handleSubmit, watch, setValue } = useForm<IFormData>(
		{
			defaultValues: {
				audioPath: '',
				videoType: VIDEO_TYPE.ANASTASIA,
				videoPath: '',
				gender: GENDER.FEMALE,
				language: LANGUAGE.RUSSIAN,
				text: '',
			},
		},
	);

	const {
		text, videoType, audioPath, gender, language, videoPath,
	} = watch();

	const onSubmit = handleSubmit(async (data) => {
		console.log(data);
	});

	const handleVideoPath = (path: string) => {
		if (!isEmpty(path)) {
			setValue('videoPath', path);
			setValue('videoType', VIDEO_TYPE.CUSTOM);
		}
	};

	const handleSelectAvatar = (type: VIDEO_TYPE) => {
		setValue('videoType', type);
	};

	const handleChangeAudioPath = (path: string) => {
		setValue('audioPath', path);
	};

	const handleChangeTextValue = (value: string) => {
		setValue('text', value);
	};

	const handleGenderLanguage = (value: GENDER) => {
		setValue('gender', value);
	};

	const handleSelectLanguage = (value: LANGUAGE) => {
		setValue('language', value);
	};

	return (
		<Stack direction="column" spacing={3} component="form" onSubmit={onSubmit}>
			<Stack direction="row" spacing={2}>
				<ToggleButton isSelected={isAvatarSelected} onClick={() => setDataType(DATA_TYPE.AVATAR)}>Аватар</ToggleButton>
				<ToggleButton isSelected={isVoiceSelected} onClick={() => setDataType(DATA_TYPE.VOICE)}>Голос</ToggleButton>
			</Stack>

			{isAvatarSelected && (
				<VideoSettings
					videoType={videoType}
					videoPath={videoPath}
					handleSelectAvatar={handleSelectAvatar}
					handleVideoPath={handleVideoPath}
				/>
			)}
			{isVoiceSelected && (
				<VoiceSettings
					audioPath={audioPath}
					gender={gender}
					language={language}
					textValue={text}
					handleChangeAudioPath={handleChangeAudioPath}
					handleChangeTextValue={handleChangeTextValue}
					handleGenderLanguage={handleGenderLanguage}
					handleSelectLanguage={handleSelectLanguage}
				/>
			)}

			<Button type="submit" fullWidth variant="contained" color="primary" sx={{ textTransform: 'capitalize' }} endIcon={<SyncIcon />}>Сгенерировать</Button>
		</Stack>
	);
};

export default Settings;
