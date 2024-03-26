import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Stack, Typography, IconButton } from '@mui/material';

interface IProps {
    isSelected: boolean;
    title: string;
    onClick(): void;
}

const SoundItem: React.FunctionComponent<IProps> = ({ isSelected, onClick, title }) => (
	<Stack
		onClick={onClick}
		direction="row"
		px="14px"
		py="10px"
		alignItems="center"
		justifyContent="space-between"
		sx={{
			borderRadius: 4,
			borderColor: '#DBDBDD',
			borderStyle: 'solid',
			borderWidth: '4px',
			cursor: 'pointer',

			...(isSelected && {
				borderColor: '#4788EA',
			}),

		}}
	>
		<Typography variant="body1" sx={{ color: '#000010', fontSize: 14, fontWeight: '600' }}>{title}</Typography>

		<IconButton sx={{ background: '#DBDBDD' }} size="small">
			{false ? <PauseIcon sx={{ height: 24, width: 24 }} /> : <PlayArrowIcon sx={{ height: 24, width: 24 }} />}
		</IconButton>
	</Stack>
);

export default SoundItem;
