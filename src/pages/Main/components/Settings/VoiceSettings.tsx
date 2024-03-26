import React from 'react';
import { Button, Paper } from '@mui/material';

import SoundDownload from 'library/components/SoundDownload';
import TextEdit from 'library/components/TextEdit';
import VoiceSelector from 'library/components/VoiceSelector.tsx';

interface IProps {}

const VoiceSettings: React.FunctionComponent<IProps> = () => (
	<>
		<SoundDownload />

		<Paper sx={{ minHeight: 196, width: '100%', p: 2 }}>
			<VoiceSelector />
		</Paper>

		<Paper sx={{ minHeight: 200, width: '100%', p: 2 }}>
			<TextEdit />
		</Paper>

		<Button fullWidth variant="contained" color="primary" sx={{ textTransform: 'capitalize' }}>Сгенерировать</Button>
	</>
);

export default VoiceSettings;
