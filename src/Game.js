import React from 'react';

export const Game = props => {
	if(props.yourScore > props.aiScore){
		props.you.push(1);
		return(
			<div className="Game">
				{console.log("entered")}
				<div>You: {props.you.length/2}</div>
				<div>Ai: {props.ai.length/2}</div>
				<div>Draw: {props.draw.length/2}</div>
			</div>
		);
	}

	else if(props.yourScore < props.aiScore){
		props.ai.push(1);
		return(
			<div className="Game">
				<div>You: {props.you.length/2}</div>
				<div>Ai: {props.ai.length/2}</div>
				<div>Draw: {props.draw.length/2}</div>
			</div>
		);
	}

	else if(props.yourScore === props.aiScore && props.yourScore !== 0 && props.aiScore !== 0){
		props.draw.push(1);
		return(	
			<div className="Game">
				<div>You: {props.you.length/2}</div>
				<div>Ai: {props.ai.length/2}</div>
				<div>Draw: {props.draw.length/2}</div>
			</div>
		);
	}

	else if (props.yourScore === 0 && props.aiScore === 0) {
	    return (
	      	<div className="Game">
				<div>You: {props.you.length/2}</div>
				<div>Ai: {props.ai.length/2}</div>
				<div>Draw: {props.draw.length/2}</div>
			</div>
	    );
	}

	else{
		return null;
	}
}