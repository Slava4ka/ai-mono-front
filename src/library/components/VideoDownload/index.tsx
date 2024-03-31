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
import { isNil, isNotNil } from 'ramda';
import { CancelTokenSource } from 'axios';
import BlockIcon from '@mui/icons-material/Block';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import mediaDownloader from 'library/utils/mediaDownloader';
import bytesToMB from 'library/utils/bytesToMB';
import VisuallyHiddenInput from 'library/components/VisuallyHiddenInput';

import addVideoUrl from '../../../resources/images/addVideo.svg';

interface IProps {
	videoPath: string | undefined;
	setVideoPath(path: string): void;
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

const VideoDownload: React.FunctionComponent<IProps> = ({ videoPath, setVideoPath }) => {
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
			{/* Файл не загружен */}
			{
				isNil(fileSize) && isNil(progress) && (
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
								background: '#D43479',
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
									const videoFile = e?.target?.files?.[0];

									if (videoFile) {
										mediaDownloader(
											videoFile,
											(token) => { cancelRef.current = token; },
											setProgress,
											'video',
											(data, res) => {
												setVideoPath(res ?? data.name);
												setFileSize(videoFile.size);
											},
										);
									} else {
										toast.error('Ошибка при загрузке файла');
									}
								}}
								accept=".mp4"
							/>
							<span style={{ color: '#4788EA', fontWeight: 700 }}>Загрузить</span>
							&nbsp;
							видео
						</Button>
					</>
				)
			}

			{/* Загрузка файла */}
			{
				isNotNil(progress) && (
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
							<Typography variant="body1" sx={{ fontWeight: 'bold', color: '#FFF' }}>Идет загрузка видеофайла</Typography>
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
				isNotNil(fileSize) && isNil(progress) && (
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
							onClick={() => setVideoPath('')}
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
							<Typography variant="body1" sx={{ fontWeight: 'bold', color: '#FFF' }}>Видеофайл загружен</Typography>
							<Typography variant="caption" sx={{ color: '#FFF' }}>{`${videoPath} ${bytesToMB(fileSize ?? 0)}MB`}</Typography>
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
				<Box sx={INFO_SX}>.mp4</Box>
				<Box sx={INFO_SX}>{'< 30MB'}</Box>
				<Box sx={INFO_SX}>{'< 30сек'}</Box>
			</Stack>
			<Box
				component="img"
				src={addVideoUrl}
				sx={{
					position: 'absolute',
					zIndex: 0,
					left: '7.69%',
					top: 0,
					bottom: 0,
					userDrag: 'none',
					WebkitUserDrag: 'none',
					userSelect: 'none',
					MozUserSelect: 'none',
					WebkitUserSelect: 'none',
					MsUserSelect: 'none',
				}}
			/>
		</Stack>
	);
};

export default VideoDownload;
