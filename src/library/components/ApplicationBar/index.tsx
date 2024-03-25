import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logoWithLabelURL from '../../../resources/images/logoWithLabel.svg';

const ApplicationBar = () => (
	<AppBar
		position="static"
		sx={{
			height: '56px',
			background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.5) 100%)',
		}}
	>
		<Toolbar variant="dense" sx={{ height: '100%' }}>
			<Box component="img" src={logoWithLabelURL} />
		</Toolbar>
	</AppBar>
);

export default ApplicationBar;
