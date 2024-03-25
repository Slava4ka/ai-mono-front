import { Box } from '@mui/material';
import React, { FunctionComponent, PropsWithChildren, SyntheticEvent } from 'react';
import TouchRipple, {TouchRippleActions} from '@mui/material/ButtonBase/TouchRipple';

interface IProps {
    isSelected: boolean;
    onClick(): void;
}

const ToggleButton: FunctionComponent<PropsWithChildren<IProps>> = ({children, isSelected, onClick}) => {
	const rippleRef = React.useRef<TouchRippleActions>(null);

	const onRippleStart = (e: SyntheticEvent) => {
		rippleRef.current?.start(e);
	};

	const onRippleStop = (e: SyntheticEvent) => {
		rippleRef.current?.stop(e);
	};

	return (
		<Box
			component="button"
			onClick={onClick}
			onMouseDown={onRippleStart}
			onMouseUp={onRippleStop}
			onMouseLeave={onRippleStop}
			sx={{
				position: 'relative',
				fontSize: 15,
				fontWeight: 'bold',
				width: '100%',
				height: 38,
				border: 'none',
				borderRadius: 1,
				background: '#EDFAFE',
				color: '#6E7B87',
				p: 1,
				cursor: 'pointer',
				outline: 'inherit',

				'&:hover': {
					background: '#FFFFFFB9',
				},

				...(isSelected && {
					color: '#4788EA',
					background: '#FFFFFF',
				}),
			}}
		>
			{children}
			<TouchRipple ref={rippleRef} center={false} />
		</Box>
	);
};

export default ToggleButton;
