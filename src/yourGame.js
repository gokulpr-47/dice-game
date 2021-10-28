import React from 'react';

class YourGame extends React.Component{
	
	state={
		one:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg",
	    two:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg",
	    three:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg",
	    four:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg",
	    five:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg",
	    six:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg",
    }

	render(props){
		if(this.props.yourDice===1){
			return(
				<div>
					<img src={this.state.one} alt="diceFaceOne"/>
				</div>
			);
		}
		else if(this.props.yourDice===2){
			return(
				<div>
					<img src={this.state.two} alt="diceFaceTwo"/>
				</div>
			);
		}
		else if(this.props.yourDice===3){
			return(
				<div>
					<img src={this.state.three} alt="diceFaceThree"/>
				</div>
			);
		}
		else if(this.props.yourDice===4){
			return(
				<div>
					<img src={this.state.four} alt="diceFaceFour"/>
				</div>
			);
		}
		else if(this.props.yourDice===5){
			return(
				<div>
					<img src={this.state.five} alt="diceFaceFive"/>
				</div>
			);
		}
		else if(this.props.yourDice===6){
			return(
				<div>
					<img src={this.state.six} alt="diceFaceSix"/>
				</div>
			);
		}
		else{
			return(<div></div>)
		}
	}
}

export default YourGame