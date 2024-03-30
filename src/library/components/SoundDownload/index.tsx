import React, { useState } from 'react';
import {
	Box, Button, IconButton, Stack,
	SxProps,
	Theme,
} from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import soundWaveURL from '../../../resources/images/soundWave.svg';

interface IProps {
	audioPath: string | undefined;
	handleChangeAudioPath(audioPath: string): void;
}

const INFO_SX: SxProps<Theme> = {
	background: '#4788EA',
	borderRadius: 1,
	px: '14px',
	py: '6px',
	fontSize: '16px',
	fontWeight: 'bold',
	color: 'white',
};

const SoundDownload: React.FunctionComponent<IProps> = () => {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<Stack
			direction="row"
			sx={{
				position: 'relative',
				p: 1,
				height: 80,
				background: 'linear-gradient(90deg, #4788EA 0%, #79CBCA 50%, #E684AE 100%)',
				justifyContent: 'space-between',
				alignItems: 'end',
				zIndex: 1,
				borderRadius: 4,
			}}
		>

			<Box
				sx={{
					height: 64,
					width: 64,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
					zIndex: 1,
					background: '#48D1CF',
					borderRadius: 4,
				}}
			>
				<CloudUploadOutlinedIcon sx={{ color: '#FFF', width: 27, height: 27 }} />
				<IconButton
					sx={{
						width: 32,
						height: 32,
						position: 'absolute',
						right: -22,
						bottom: 3,
						background: '#FFFFFF66',
						backdropFilter: 'blur(10px)',
						color: '#5C81BA',
					}}
					onClick={() => setShowInfo((prev) => !prev)}
				>
					<InfoOutlinedIcon />
				</IconButton>
			</Box>

			<Box
				component="img"
				src={soundWaveURL}
				sx={{
					position: 'absolute',
					zIndex: 0,
					width: '201px',
					height: '96.75px',
					left: 'calc(50% - 201px/2 + 20.5px)',
					top: 'calc(50% - 96.75px/2 - 0.5px)',
					userDrag: 'none',
					WebkitUserDrag: 'none',
					userSelect: 'none',
					MozUserSelect: 'none',
					WebkitUserSelect: 'none',
					MsUserSelect: 'none',
				}}
			/>

			<Button
				sx={{
					fontWeight: 500,
					height: '38px',
					width: '160px',
					background: '#FFFFFF80',
					backdropFilter: 'blur(6px)',
					borderRadius: 4,
					color: '#000',
					textTransform: 'none',
					py: '9px',
					px: '8px',

					':hover': {
						background: '#FFFFFFB3',
					},
				}}
			>
				<span style={{ color: '#4788EA', fontWeight: 700 }}>Загрузить</span>
				&nbsp;
				аудио
			</Button>

			<Stack
				direction="row"
				spacing={1}
				sx={{
					visibility: showInfo ? 'visible' : 'hidden',
					position: 'absolute',
					zIndex: 10,
					top: -14,
					left: 90,
				}}
			>
				<Box sx={INFO_SX}>.wav</Box>
				<Box sx={INFO_SX}>{'< 30MB'}</Box>
				<Box sx={INFO_SX}>{'< 30сек'}</Box>
			</Stack>
		</Stack>
	);
};

export default SoundDownload;
