import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import {
	Box, IconButton, Slider, Stack,
	Typography,
} from '@mui/material';
import formatTime from 'library/utils/formatTime';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import { OnProgressProps } from 'react-player/base';

interface IProps {}

const Player: React.FunctionComponent<IProps> = () => {
	const videoPlayerRef = useRef<ReactPlayer>(null);
	const [videoState, setVideoState] = useState({
		isPlaying: false,
		muted: false,
		volume: 0.5,
		playbackRate: 1.0,
		played: 0,
		seeking: false,
		buffer: true,
	});

	const { isPlaying, muted, volume } = videoState;

	const formatCurrentTime = formatTime(videoPlayerRef.current?.getCurrentTime());
	const formatDuration = formatTime(videoPlayerRef.current?.getDuration());

	const playPauseHandler = () => setVideoState({ ...videoState, isPlaying: !videoState.isPlaying });

	const rewindHandler = () => videoPlayerRef.current?.seekTo(videoPlayerRef.current.getCurrentTime() - 5);

	const handleFastFoward = () => videoPlayerRef.current?.seekTo(videoPlayerRef.current.getCurrentTime() + 10);

	const volumeChangeHandler = (_: any, value: number | number[]) => {
		const newVolume = typeof value === 'number' ? value / 100 : value[0] / 100;

		setVideoState({
			...videoState,
			volume: newVolume,
			muted: Number(newVolume) === 0, // volume === 0 then muted
		});
	};

	const muteHandler = () => setVideoState({ ...videoState, muted: !videoState.muted });

	const bufferStartHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Bufering.......');
		setVideoState({ ...videoState, buffer: true });
	};

	const bufferEndHandler = () => {
		// eslint-disable-next-line no-console
		console.log('buffering stoped ,,,,,,play');
		setVideoState({ ...videoState, buffer: false });
	};

	const progressHandler = (state: OnProgressProps) => setVideoState((prev) => ({ ...prev, played: state.playedSeconds }));

	return (
		<Stack
			sx={{
				overflow: 'hidden',
				borderRadius: '8px',
				minWidth: 924,
				minHeight: 556,
				justifyContent: 'flex-end',
			}}
		>
			<ReactPlayer
				ref={videoPlayerRef}
				width="100%"
				height="100%"
				url="https://cdn.jsdelivr.net/gh/SH20RAJ/Sopplayer@main/sample.mp4"
				playing={isPlaying}
				volume={volume}
				muted={muted}
				onProgress={progressHandler}
				onBuffer={bufferStartHandler}
				onBufferEnd={bufferEndHandler}

			/>
			<Stack
				direction="row"
				sx={{
					mt: '-7px',
					px: 2,
					height: '66px',
					background: ({palette}) => palette.common.white,
				}}
				justifyContent="space-between"
				alignItems="center"
			>

				<Stack spacing={2} direction="row" alignItems="center" sx={{ width: 200 }}>
					<IconButton onClick={muteHandler}>
						{videoState.muted ? <VolumeOffIcon /> : <VolumeUp />}
					</IconButton>
					<Slider
						color="primary"
						disabled={false}
						marks={false}
						orientation="horizontal"
						min={0}
						max={100}
						value={videoState.muted ? 0 : Math.round(videoState.volume * 100)}
						onChange={volumeChangeHandler}
					/>
				</Stack>

				<Stack direction="row" spacing={1} alignItems="center">
					<Box>
						<IconButton onClick={rewindHandler}>
							<FastRewindIcon />
						</IconButton>
					</Box>
					<IconButton onClick={playPauseHandler}>
						{videoState.isPlaying ? <PauseCircleIcon sx={{ width: 34, height: 34 }} /> : <PlayCircleIcon sx={{ width: 34, height: 34 }} />}
					</IconButton>
					<IconButton onClick={handleFastFoward}>
						<FastForwardIcon />
					</IconButton>
				</Stack>

				<Box component="span" sx={{ width: 200, textAlign: 'end' }}>
					<Typography variant="body1">
						{`${formatCurrentTime}/${formatDuration}`}
					</Typography>
				</Box>

			</Stack>

		</Stack>
	);
};

export default Player;
