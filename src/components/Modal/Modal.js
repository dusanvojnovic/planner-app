import { useState, useRef } from 'react';

import Box from '@mui/material/Box';
import Button from '../Button/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './Modal.css';

const BasicModal = ({ date, onEventAdded, onCloseModal }) => {
	const [open, setOpen] = useState(true);
	// const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const titleRef = useRef();
	const hoursRef = useRef();

	const onSubmit = () => {
		onEventAdded({
			title: `${titleRef.current.value}   (${hoursRef.current.value} hours)`,
			date: date,
		});
		handleClose();
		onCloseModal();
	};

	return (
		<div>
			<Modal
				open={open}
				onClose={onCloseModal}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box className='modal__box'>
					<div className='modal__box-inputs'>
						<div className='modal__box-inputs--title'>
							<p>Title</p>
							<input ref={titleRef} className='input' />
						</div>
						<div className='modal__box-inputs--title'>
							<p>Hours</p>
							<input ref={hoursRef} className='input' />
						</div>
					</div>
					<Button onClick={onSubmit} className='modal__box-button'>
						add
					</Button>
				</Box>
			</Modal>
		</div>
	);
};

export default BasicModal;
