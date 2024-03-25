import {
	Button, Paper, Stack,
} from '@mui/material';
import SoundDownload from 'library/components/SoundDownload';
import ToggleButton from 'library/components/ToggleButton';
import VoiceSelector from 'library/components/VoiceSelector.tsx';
import DATA_TYPE from 'library/consts/DataType';
import React, { useState } from 'react';

interface IProps {

}

const Settings: React.FunctionComponent<IProps> = () => {
	const [dataType, setDataType] = useState(DATA_TYPE.AVATAR);

	return (
		<Stack direction="column" spacing={3}>

			<Stack direction="row" spacing={2}>
				<ToggleButton isSelected={dataType === DATA_TYPE.AVATAR} onClick={() => setDataType(DATA_TYPE.AVATAR)}>Аватар</ToggleButton>
				<ToggleButton isSelected={dataType === DATA_TYPE.VOICE} onClick={() => setDataType(DATA_TYPE.VOICE)}>Голос</ToggleButton>
			</Stack>

			<SoundDownload />

			<Paper sx={{ minHeight: 196, width: '100%', p: 2 }}>
				<VoiceSelector />
			</Paper>

			<Paper sx={{ minHeight: 200, width: '100%' }} />

			<Button fullWidth variant="contained" color="primary" sx={{ textTransform: 'capitalize' }}>Сгенерировать</Button>
		</Stack>
	);
};

export default Settings;
