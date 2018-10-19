import React, { Component,Fragment } from 'react';
import Button from './Button';
import TextBox from './TextBox';
import Hand from './Hand';
import Controller from './Controller';
import './App.css';

class App extends Component {
  state = {
    started : false,
    gamePlay : false,
    soundPlay : false,
    playerSelectedHand : '',
    playerName : '',
    round : 0,
    ranking : '',
    result : ''
  }

  componentDidMount(){
    const playName = prompt('Input your name?');
    this.setState({
      playerName : playName
    });
  }

  onClickStartButton = () => {
    this.setState({
      started : (this.state.started) ? false : true,
      gamePlay: (this.state.gamePlay) ? false : true,
      playerSelectedHand : (this.state.started) ? '' : this.state.playerSelectedHand,
      npcSelectedHand : (this.state.started) ? '' : this.state.playerSelectedHand,
      result : '',
      round : (this.state.started) ? this.state.round : this.state.round + 1
    });
  }

  onClickControlButton = ({target}) => {
    if(!this.state.started) return false;
    const playerHand = (target.id === undefined) ? '' : target.id;
    const npcHand = getNpcHand(target.id);

    this.setState({ 
      playerSelectedHand : playerHand,
      npcSelectedHand : npcHand,
      play : (this.state.play) ? false : true,
      started : false,
      result : getGameResult(npcHand,playerHand)
    });
  }

  onClickRoundReset = () => {
    if(window.confirm('Do you want to round initialize?')){
      this.setState({
        playerSelectedHand : '',
        npcSelectedHand : '',
        started : false,
        round : 0,
        result : ''
      });
    }
  }

  onClickSoundStart = () => {
    const myAudio = new Audio('./bensound-funnysong.mp3');
    if(this.state.soundPlay){
      myAudio.pause();
    }else{
      myAudio.play();
    }
    this.setState({
      soundPlay : !this.state.soundPlay
    });
  }

  render() {
    const {onClickStartButton,onClickControlButton,onClickRoundReset,onClickSoundStart} = this;
    const {started,playerSelectedHand,npcSelectedHand,playerName,round,result,soundPlay} = this.state;

    return (
      <Fragment>
        <div className="App">
          <div className="nav-bar">
            <Button name="sound"
                    ButtonText={soundPlay ? "||" : '>'}
                    onClickButton={onClickSoundStart}/>          
            <Button name="reset"
                    ButtonText="Reset"
                    onClickButton={onClickRoundReset}/>
          </div>
          <h1>Rock Scissors Paper Game</h1>
          <Button name="startButton" 
                  ButtonText={started ? "STOP" : "START"} 
                  onClickButton={onClickStartButton} />
          <TextBox round={round} result={result} />
          <div className="gamePanel">
            <Hand name="Player"
                  playerName={playerName}
                  started={started}
                  selectedHand={playerSelectedHand}/>
            <Hand name="NPC" 
                  started={started} 
                  selectedHand={npcSelectedHand} />
          </div>     
          <Controller onClickButton={onClickControlButton} />           
          <span className="font-size_12">since 2018<br/>Audio : https://www.bensound.com/royalty-free-music/track/funny-song</span>
        </div>
      </Fragment>
    );
  }
}

/* func */
function getNpcHand(val){
  if(val === undefined) return false;
  const randomNum = randIntInRange(0,2);
  
  if(randomNum === 0) return 'rock';
  else if(randomNum === 1) return 'scissors';
  else if(randomNum === 2) return 'paper';
  else return false;
}

function randIntInRange(min, max) {
  return Math.floor(Math.random() * ((max-min) + 1));
}

function getGameResult(npcHand,playerHand){
  if(npcHand === '' || playerHand === '') return false;
  playerHand = convert(playerHand);
  npcHand = convert(npcHand);

  if(playerHand === 0 && npcHand === 1) return 'win';  
  else if(playerHand === 1 && npcHand === 2) return 'win';  
  else if(playerHand === 2 && npcHand === 0) return 'win';  
  else if(playerHand === npcHand) return 'tie';
  else return 'lose';
}

function convert(value){
  if(value === 'rock') return 0;
  else if(value === 'scissors') return 1;
  else if(value === 'paper') return 2;
}

export default App;

/*
- 유저네임 등록 가능
- 시작 클릭 실행, 정지 버튼으로 정지 가능
- 시작 클릭 시 이미지 움직임
- 이미지 애니메이션
- 결과도 이미지 노출(player, npc)
- 시작 클릭 시 컨트롤 버튼 클릭 가능(게임진행가능)
- 시작 -> 컨트롤 버튼 클릭하면 다시 시작 버튼 눌러야함
- 컨트롤 버튼 클릭 시 랜덤 확률로 결과
- 라운드는 이기나 지나 비기나 계속 올라감
- 라운드 리셋 버튼
- 승리, 패배, 무승부 표현
- 배경 음악 추가(무료 라이선스, 출처표시)
*/