import React from 'react';
import { Paper } from '@mui/material';

import SoundDownload from 'library/components/SoundDownload';
import TextEdit from 'library/components/TextEdit';
import VoiceSelector from 'library/components/VoiceSelector.tsx';
import GENDER from 'library/consts/Gender';
import LANGUAGE from 'library/consts/Language';

interface IProps {
	audioPath: string;
	textValue: string;
	language: LANGUAGE | undefined;
	gender: GENDER | undefined;
	handleChangeAudioPath(audioPath: string): void;
	handleSelectLanguage(language: LANGUAGE): void;
	handleGenderLanguage(gender: GENDER): void;
	handleChangeTextValue(value: string): void;
}

const VoiceSettings: React.FunctionComponent<IProps> = ({
	audioPath, textValue, language, gender, handleChangeAudioPath, handleChangeTextValue, handleGenderLanguage, handleSelectLanguage,
}) => (
	<>
		<SoundDownload audioPath={audioPath} handleChangeAudioPath={handleChangeAudioPath} />

		<Paper sx={{
			minHeight: 196, width: '100%', p: 2, borderRadius: 2,
		}}
		>
			<VoiceSelector gender={gender} language={language} handleGenderLanguage={handleGenderLanguage} handleSelectLanguage={handleSelectLanguage} />
		</Paper>

		<Paper sx={{
			minHeight: 200, width: '100%', p: 2, borderRadius: 2,
		}}
		>
			<TextEdit value={textValue} handleChangeValue={handleChangeTextValue} />
		</Paper>
	</>
);

export default VoiceSettings;
