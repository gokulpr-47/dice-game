import React from 'react';

export const Result = (props) => {

			{console.log(props.status.yournum)}
	if(props.status.yournum > props.status.ainum){
		return(
			<p>You Win</p>
		);
	}
	else if(props.status.yournum < props.status.ainum){
		return(
			<p>AI Win</p>
		);
	}
	else if(props.status.yournum === props.status.ainum){
		return(
			<p>Draw</p>
		);
	}
	else{
		return (<p>Press the play button</p>);
	}
}