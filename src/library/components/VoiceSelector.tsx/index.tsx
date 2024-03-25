import {
	Stack, SxProps, Theme, Typography,
} from '@mui/material';
import GENDER from 'library/consts/Gender';
import LANGUAGE from 'library/consts/Language';
import React, { useState } from 'react';
import ToggleButton from '../ToggleButton';
import SoundItem from './SoundItem';

interface IProps {}

const LANGUAGE_BUTTON_STYLE: SxProps<Theme> = {
	color: '#6E7B87',
	background: '#E6EDF2',
	fontSize: 14,
	'&:hover': {
		color: '#FFF',
		background: '#4788EAB9',
	},
};

const VoiceSelector: React.FunctionComponent<IProps> = () => {
	const [gender, setGender] = useState<GENDER>(GENDER.FEMALE);
	const [language, setLanguage] = useState<LANGUAGE>(LANGUAGE.ENGLISH);

	return (
		<Stack direction="column" spacing={2} pr="20%">
			<Typography variant="body1" sx={{ color: '#6E7B87', fontWeight: 'bold' }}>Настройки голоса</Typography>
			<Stack direction="row" spacing={1}>
				<ToggleButton
					isSelected={language === LANGUAGE.RUSSIAN}
					onClick={() => setLanguage(LANGUAGE.RUSSIAN)}
					sx={LANGUAGE_BUTTON_STYLE}
					selectedBackground="#4788EA"
					selectedColor="#FFF"
				>
					Русский
				</ToggleButton>
				<ToggleButton
					isSelected={language === LANGUAGE.ENGLISH}
					onClick={() => setLanguage(LANGUAGE.ENGLISH)}
					sx={LANGUAGE_BUTTON_STYLE}
					selectedBackground="#4788EA"
					selectedColor="#FFF"
				>
					Английский
				</ToggleButton>
			</Stack>

			<SoundItem title="Женский" isSelected={gender === GENDER.FEMALE} onClick={() => setGender(GENDER.FEMALE)} />

			<SoundItem title="Мужской" isSelected={gender === GENDER.MALE} onClick={() => setGender(GENDER.MALE)} />
		</Stack>
	);
};

export default VoiceSelector;
