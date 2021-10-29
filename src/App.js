import './App.css';
import React from 'react';
import YourGame from './yourGame.js';
import AiGame from './aiGame.js';
import { Game } from './Game.js';
import { Result } from './Result.js';


class App extends React.Component{

  aiwin = [];
  youwin = [];
  draw = [];
  constructor(props){    
    super(props);
    this.state = {
      ainum: 0,
      yournum: 0,
      games: 0,
      winStatus : "",

      one:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg",
      two:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg",
      three:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg",
      four:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg",
      five:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg",
      six:"https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg",
    };

    this.handleClick = this.handleClick.bind(this);
    this.clear = this.clear.bind(this);
  }  

  AIthrow(){
    this.setState({
       ainum : Math.floor(Math.random() * 6) + 1
    });
  }

  handleClick(){
    this.setState({
      yournum : Math.floor(Math.random() * 6) + 1,
      games : this.state.games +1,
    });
    this.AIthrow()
  }

  clear(){
    this.aiwin = [];
    this.youwin = [];
    this.draw = [];
    this.setState({
      game : 0,
      ainum: 1,
      yournum: 1,
    })
  }

  render(){

    return(
      <div className="container">
        <div className="wrapper"> 
          <div><h1>Dice Game</h1></div>
          <div onClick={this.clear}><button>Reset</button></div>
          <div> </div>
          <div onClick={this.handleClick} ><img src="https://cdn.iconscout.com/icon/free/png-256/start-1438842-1214529.png" alt="start game"/></div>
          
          <Game 
            yourScore = {this.state.yournum}
            aiScore = {this.state.ainum}
            you = {this.youwin}
            ai = {this.aiwin}
            draw = {this.draw}
          /> 
                   
        </div>
        <div className="dice-face">
          <YourGame yourDice={this.state.yournum}></YourGame>
          <AiGame aiDice={this.state.ainum}></AiGame>
        </div>

        <div className="result">
          <Result
            status = {this.state}
          />
        </div>

        <div className="num_games">Games played: {this.state.games}</div>
      </div>
    )
  }
}

export default App;