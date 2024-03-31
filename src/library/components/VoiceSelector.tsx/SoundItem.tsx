import React, { useEffect, useRef } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import {
	Stack, Typography, IconButton, Box,
} from '@mui/material';

interface IProps {
	audioUrl: string;
	isPlaying: boolean;
	togglePlay(): void;
    title: string;
    isSelected: boolean;
    onClick(): void;
}

const SoundItem: React.FunctionComponent<IProps> = ({
	isSelected, audioUrl, onClick, title, isPlaying, togglePlay,
}) => {
	const audioPlayer = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		if (!isPlaying && (audioPlayer.current?.played.length ?? 0) > 0) {
			audioPlayer.current?.pause();
		} else if (isPlaying) {
			audioPlayer.current?.play();
		}
	}, [isPlaying]);

	return (
		<Stack direction="row" spacing={2} alignItems="center">
			<Box
				onClick={onClick}
				px="14px"
				py="10px"
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				flex={1}
				sx={{
					borderRadius: 4,
					borderColor: '#DBDBDD',
					borderStyle: 'solid',
					borderWidth: '4px',
					cursor: 'pointer',

					'&:hover': {
						borderColor: '#4788EAB9',
					},

					...(isSelected && {
						borderColor: '#4788EA',
					}),

				}}
			>
				<Typography variant="body1" sx={{ color: '#000010', fontSize: 14, fontWeight: '600' }}>{title}</Typography>
			</Box>
			<Box>
				<audio ref={audioPlayer} onEnded={togglePlay}>
					<source src={audioUrl} type="audio/wav" />
					<track kind="captions" src="your-captions-file.vtt" srcLang="ru" />
					Your browser does not support the audio element.
				</audio>
				<IconButton sx={{ background: '#DBDBDD' }} size="small" onClick={togglePlay}>
					{isPlaying ? <PauseIcon sx={{ height: 24, width: 24 }} /> : <PlayArrowIcon sx={{ height: 24, width: 24 }} />}
				</IconButton>
			</Box>
		</Stack>
	);
};

export default SoundItem;
