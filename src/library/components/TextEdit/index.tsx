import React from 'react';
import { Stack, TextField, Typography } from '@mui/material';

interface IProps {
	value: string;
	handleChangeValue(value: string): void;
}

const TextEdit: React.FunctionComponent<IProps> = ({value, handleChangeValue}) => (
	<Stack direction="column" spacing={2}>
		<Typography variant="body1" sx={{ color: '#6E7B87', fontWeight: 'bold' }}>Текст</Typography>

		<TextField
			multiline
			rows={4}
			value={value}
			onChange={(e) => handleChangeValue(e.target.value)}
			sx={{
				'& .MuiOutlinedInput-root': {
					'& fieldset': {
						borderRadius: 4,
						borderColor: '#DBDBDD',
						borderStyle: 'solid',
						borderWidth: '3px',
					},
					'&:hover fieldset': {
						borderColor: '#4788EAB9',
					},
					'&.Mui-focused fieldset': {
						borderColor: '#4788EA',
						borderWidth: '3px',
					},
				},

				'& .MuiInputBase-root': {
					'&:hover': {
						borderColor: 'red',
						borderWidth: '3px',
					},
				},
			}}
		/>
	</Stack>
);

export default TextEdit;
