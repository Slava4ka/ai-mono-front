import React, { useRef, useState } from 'react';
import {
	Box,
	Button,
	CircularProgress,
	IconButton,
	Stack,
	SxProps,
	Theme,
	Typography,
} from '@mui/material';
import { toast } from 'react-toastify';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BlockIcon from '@mui/icons-material/Block';
import CloseIcon from '@mui/icons-material/Close';
import { CancelTokenSource } from 'axios';
import { isEmpty, isNil, isNotNil } from 'ramda';

import mediaDownloader from 'library/utils/mediaDownloader';
import bytesToMB from 'library/utils/bytesToMB';
import soundWaveURL from '../../../resources/images/soundWave.svg';
import VisuallyHiddenInput from '../VisuallyHiddenInput';

interface IProps {
	audioPath: string;
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

const SoundDownload: React.FunctionComponent<IProps> = ({ audioPath, handleChangeAudioPath }) => {
	const [showInfo, setShowInfo] = useState(false);
	const [progress, setProgress] = useState<number>();
	const [fileSize, setFileSize] = useState<number>();

	const cancelRef = useRef<CancelTokenSource>();

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

			{/* Файл не загружен */}
			{
				isEmpty(audioPath) && isNil(progress) && (
					<>
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
							component="label"
						>
							<VisuallyHiddenInput
								type="file"
								onChange={(e) => {
									const file = e?.target?.files?.[0];

									if (file) {
										mediaDownloader(
											file,
											(token) => { cancelRef.current = token; },
											setProgress,
											'audio',
											(data, res) => {
												handleChangeAudioPath(res ?? data.name);
												setFileSize(bytesToMB(data.size));
											},
										);
									} else {
										toast.error('Ошибка при загрузке файла');
									}
								}}
								accept=".wav"
							/>
							<span style={{ color: '#4788EA', fontWeight: 700 }}>Загрузить</span>
							&nbsp;
							аудио
						</Button>
					</>
				)
			}

			{/* Загрузка файла */}
			{
				isEmpty(audioPath) && isNotNil(progress) && (
					<>
						<IconButton
							sx={{
								width: 64,
								height: 64,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								position: 'relative',
								zIndex: 1,
								borderRadius: 4,
								background: '#FFFFFF66',
								color: '#FFF',

								'& .MuiTouchRipple-root .MuiTouchRipple-child': {
									borderRadius: 4,
								},

								':hover': {
									background: '#FFFFFF80',
								},
							}}
							onClick={() => {
								if (isNotNil(cancelRef.current)) {
									cancelRef.current.cancel();
								}
							}}
						>
							<BlockIcon />
						</IconButton>
						<Stack direction="column" alignItems="center" justifyContent="center" height="100%">
							<Typography variant="body1" sx={{ fontWeight: 'bold', color: '#FFF' }}>Идет загрузка аудиофайла</Typography>
							<Typography variant="caption" sx={{ color: '#FFF' }}>{`Файл загружен на ${progress} %`}</Typography>
						</Stack>
						<Box
							sx={{
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								mr: 3,
							}}
						>
							<CircularProgress sx={{ color: '#FFF' }} size={26} />
						</Box>
					</>
				)
			}

			{/* Файл загружен */}
			{
				!isEmpty(audioPath) && isNil(progress) && (
					<>
						<IconButton
							sx={{
								width: 64,
								height: 64,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								position: 'relative',
								zIndex: 1,
								borderRadius: 4,
								background: '#FFFFFF66',
								color: '#FFF',

								'& .MuiTouchRipple-root .MuiTouchRipple-child': {
									borderRadius: 4,
								},

								':hover': {
									background: '#FFFFFF80',
								},
							}}
							onClick={() => {
								handleChangeAudioPath('');
							}}
						>
							<CloseIcon />
						</IconButton>
						<Stack
							direction="column"
							sx={{
								alignItems: 'center',
								justifyContent: 'center',
								height: '100%',
								width: '100%',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
							}}
						>
							<Typography variant="body1" sx={{ fontWeight: 'bold', color: '#FFF' }}>Голос загружен</Typography>
							<Typography variant="caption" sx={{ color: '#FFF' }}>{`${audioPath} ${fileSize}MB`}</Typography>
						</Stack>
					</>
				)
			}

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
