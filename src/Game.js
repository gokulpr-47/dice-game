import React from 'react';

class Game extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			aiwin: 0,
			youwin: 0,
			draw: 0,
		}
	}

	check(){
		if(this.props.aiScore > this.props.yourScore){
			this.setState({
				aiwin : this.state.aiwin + 1
			})
		}
		else if(this.props.aiScore > this.props.yourScore){
			this.setState({
				youwin : this.state.youwin + 1
			})
		}
		else{
			this.setState({
				draw : this.state.draw + 1
			})
		}
	}

	render(){
		return(
			<div>
				<div>You : {this.state.youwin}</div>
				<div>AI : {this.state.aiwin}</div>
				<div>Draw : {this.state.draw}</div>
			</div>
		)
	}
}

export default Game