import React, { useState } from 'react';
import { isEmpty } from 'ramda';
import { useForm } from 'react-hook-form';
import { Stack, Button } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import { toast } from 'react-toastify';

import ToggleButton from 'library/components/ToggleButton';
import DATA_TYPE from 'library/consts/DataType';
import GENDER from 'library/consts/Gender';
import LANGUAGE from 'library/consts/Language';

import { useDispatch } from 'react-redux';
import { setVideoContentUrl } from 'library/slices/system.slice';
import { DEFAULT_AVATAR } from 'library/consts/content';
import { Payload } from 'library/hooks/useGenerateVideo';
import VideoSettings from './VideoSettings';
import VoiceSettings from './VoiceSettings';

interface IFormData {
	gender: GENDER;
	language: LANGUAGE;
	audioPath: string;
	text: string;
	videoPath: string;
}

interface IProps {
	handleGenerateVideo(payload: Payload): void;
}

const Settings: React.FunctionComponent<IProps> = ({ handleGenerateVideo }) => {
	const dispatch = useDispatch();

	const [dataType, setDataType] = useState(DATA_TYPE.AVATAR);

	const isAvatarSelected = dataType === DATA_TYPE.AVATAR;
	const isVoiceSelected = dataType === DATA_TYPE.VOICE;

	const { handleSubmit, watch, setValue } = useForm<IFormData>(
		{
			defaultValues: {
				audioPath: '',
				videoPath: DEFAULT_AVATAR,
				gender: GENDER.FEMALE,
				language: LANGUAGE.RUSSIAN,
				text: '',
			},
		},
	);

	const {
		text, audioPath, gender, language, videoPath,
	} = watch();

	const onSubmit = handleSubmit(async (data) => {
		if (isEmpty(data.text) && isEmpty(data.audioPath)) {
			toast.error('Поле "текст" не может быть пустым');
			return;
		}

		const payload = {
			gender: isEmpty(audioPath) ? data.gender : '0',
			language: isEmpty(audioPath) ? data.language : '0',
			text: isEmpty(audioPath) ? data.text : '0',
			audio_path: isEmpty(audioPath) ? '0' : data.audioPath,
			video_path: data.videoPath,
		};

		handleGenerateVideo(payload);
	});

	const handleVideoPath = (path: string) => {
		if (isEmpty(path)) {
			dispatch(setVideoContentUrl(DEFAULT_AVATAR));
			setValue('videoPath', DEFAULT_AVATAR);
		} else {
			dispatch(setVideoContentUrl(path));
			setValue('videoPath', path);
		}
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
					videoPath={videoPath}
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
