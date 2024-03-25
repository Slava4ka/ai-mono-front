import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login } from 'library/slices/system.slice';

type LoginFormData = {
	username: string;
	password: string;
	rememberMe?: boolean;
};

const AuthorizationForm = () => {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<LoginFormData>();

	const onSubmit = (data: any) => {
		if (data.username === 'admin' && data.password === 'admin123') {
			dispatch(login());
		} else {
			setError('username', {
				type: 'manual',
				message: 'Неверный логин или пароль',
			});
			setError('password', {
				type: 'manual',
				message: 'Неверный логин или пароль',
			});
		}
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				maxWidth: '500px',
				margin: 'auto',
				padding: '20px',
				borderRadius: '8px',
				boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
				backgroundColor: 'white',
			}}
		>
			<Typography variant="h5" component="div" sx={{ mb: 2 }}>
				Авторизация
			</Typography>
			<TextField
				fullWidth
				label="Имя пользователя"
				margin="normal"
				{...register('username', {
					required: 'Обязательно для заполнения',
				})}
				error={Boolean(errors.username?.message)}
				helperText={errors.username?.message as string}
			/>
			<TextField
				fullWidth
				type="password"
				label="Пароль"
				{...register('password', {
					required: 'Обязательно для заполнения',
				})}
				margin="normal"
				sx={{ mt: 2 }}
				error={Boolean(errors.password)}
				helperText={errors.password?.message as string}
			/>
			<FormControlLabel
				control={<Checkbox {...register('rememberMe')} color="primary" />}
				label="Запомни меня"
				sx={{ mt: 1, textAlign: 'left' }}
			/>
			<Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
				Войти
			</Button>
		</Box>
	);
};

export default AuthorizationForm;
