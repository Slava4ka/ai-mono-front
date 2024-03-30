import React from 'react';
import { Box, Typography } from '@mui/material';

interface IProps {
	avatarUrl: string;
	isSelected?: string;
	name: string;
}

const AvatarSelector: React.FunctionComponent<IProps> = ({ avatarUrl, isSelected, name}) => (
	<Box sx={{
		overflow: 'hidden',
		position: 'relative',
		height: 200,
		display: 'flex',
		alignItems: 'end',
		justifyContent: 'center',
		width: '100%',
		background: '#FFF',
		borderRadius: 2,
		cursor: 'pointer',
		borderColor: '#DBDBDD',
		borderStyle: 'solid',
		borderWidth: '3px',

		'&:hover': {
			borderColor: '#4788EAB9',

			img: {
				transform: 'scale(1.1)',
			},
		},

		...(isSelected && {
			borderColor: '#4788EA',

			img: {
				transform: 'scale(1.1)',
			},
		}),
	}}
	>
		<Box
			component="img"
			src={avatarUrl}
			sx={{
				width: 122,
				height: 184,
				transition: 'transform .3s ease-in-out',
				userDrag: 'none',
				WebkitUserDrag: 'none',
				userSelect: 'none',
				MozUserSelect: 'none',
				WebkitUserSelect: 'none',
				MsUserSelect: 'none',
			}}
		/>
		<Typography
			variant="h6"
			sx={{
				color: '#8FA0AB',
				fontSize: 13,
				position: 'absolute',
				right: 8,
				bottom: 8,
			}}
		>
			{name}
		</Typography>
	</Box>
);

export default AvatarSelector;
