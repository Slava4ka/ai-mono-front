import { Box, Typography } from '@mui/material';

const Footer = () => (
	<Box sx={{
		width: '100%',
		height: 'auto',
		px: '1rem',
		py: '0.5rem',
		background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)',
	}}
	>
		<Typography color="textSecondary" variant="caption">
			© 2024 – 2026 AiMono. Все права защищены
		</Typography>
	</Box>
);

export default Footer;
