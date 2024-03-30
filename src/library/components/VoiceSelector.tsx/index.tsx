import React from 'react';
import {
	Stack, SxProps, Theme, Typography,
} from '@mui/material';
import GENDER from 'library/consts/Gender';
import LANGUAGE from 'library/consts/Language';
import ToggleButton from '../ToggleButton';
import SoundItem from './SoundItem';

interface IProps {
	language: LANGUAGE | undefined;
	gender: GENDER | undefined;
	handleSelectLanguage(language: LANGUAGE): void;
	handleGenderLanguage(gender: GENDER): void;
}

const LANGUAGE_BUTTON_STYLE: SxProps<Theme> = {
	color: '#6E7B87',
	background: '#E6EDF2',
	fontSize: 14,
	'&:hover': {
		color: '#FFF',
		background: '#4788EAB9',
	},
};

const VoiceSelector: React.FunctionComponent<IProps> = ({
	language, gender, handleSelectLanguage, handleGenderLanguage,
}) => (
	<Stack direction="column" spacing={2} pr="20%">
		<Typography variant="body1" sx={{ color: '#6E7B87', fontWeight: 'bold' }}>Настройки голоса</Typography>
		<Stack direction="row" spacing={1}>
			<ToggleButton
				isSelected={language === LANGUAGE.RUSSIAN}
				onClick={() => handleSelectLanguage(LANGUAGE.RUSSIAN)}
				sx={LANGUAGE_BUTTON_STYLE}
				selectedBackground="#4788EA"
				selectedColor="#FFF"
			>
				Русский
			</ToggleButton>
			<ToggleButton
				isSelected={language === LANGUAGE.ENGLISH}
				onClick={() => handleSelectLanguage(LANGUAGE.ENGLISH)}
				sx={LANGUAGE_BUTTON_STYLE}
				selectedBackground="#4788EA"
				selectedColor="#FFF"
			>
				Английский
			</ToggleButton>
		</Stack>

		<SoundItem title="Женский" isSelected={gender === GENDER.FEMALE} onClick={() => handleGenderLanguage(GENDER.FEMALE)} />

		<SoundItem title="Мужской" isSelected={gender === GENDER.MALE} onClick={() => handleGenderLanguage(GENDER.MALE)} />
	</Stack>
);

export default VoiceSelector;
