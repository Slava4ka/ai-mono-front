import { Box, SxProps, Theme } from '@mui/material';
import React, { FunctionComponent, PropsWithChildren, SyntheticEvent } from 'react';
import TouchRipple, {TouchRippleActions} from '@mui/material/ButtonBase/TouchRipple';

interface IProps {
    isSelected: boolean;
    onClick(): void;
	sx?: SxProps<Theme> | undefined;
	selectedColor?: string;
	selectedBackground?: string;
}

const ToggleButton: FunctionComponent<PropsWithChildren<IProps>> = ({
	children, isSelected, onClick, sx, selectedBackground, selectedColor,
}) => {
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
			onClick={(e) => {
				e.preventDefault();
				onClick();
			}}
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
				borderRadius: 8,
				background: '#EDFAFE',
				color: '#6E7B87',
				p: 1,
				cursor: 'pointer',
				outline: 'inherit',

				'&:hover': {
					background: '#FFFFFFB9',
				},

				...sx,

				...(isSelected && {
					color: selectedColor ?? '#4788EA',
					background: selectedBackground ?? '#FFFFFF',
				}),
			}}
		>
			{children}
			<TouchRipple ref={rippleRef} center={false} />
		</Box>
	);
};

export default ToggleButton;
