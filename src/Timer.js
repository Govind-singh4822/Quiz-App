import React, { useState, useRef, useEffect } from 'react'


const Timer = () => {

	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00');


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		
		return {
			total, minutes, seconds
		};
	}


	const startTimer = (e) => {
		let { total,  minutes, seconds }
					= getTimeRemaining(e);
		if (total >= 0) {

			
			setTimer(
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (e) => {

		
		setTimer('02:00');

	
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 120);
		return deadline;
	}

	
	
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	
	const onClickReset = () => {
		clearTimer(getDeadTime());
	}

	return (
		<div className="timer">
			<h2>Time Left : {timer}</h2>
		</div>
	)
}

export default Timer;

