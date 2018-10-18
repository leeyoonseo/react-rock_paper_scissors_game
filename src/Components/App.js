import React, { Component } from 'react';
import Starter from './Starter';
import TextBox from './TextBox';
import Hand from './Hand';
import Controller from './Controller';
import './App.css';

class App extends Component {
  state = {
    started : false,
    play : false,
    playerSelectedHand : '',
    round : 0,
    ranking : '',
    result : ''
  }

  onClickStartButton = () => {
    this.setState({
      started : (this.state.started) ? false : true,
      play: (this.state.play) ? false : true,
      playerSelectedHand : (this.state.started) ? '' : this.state.playerSelectedHand
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
      round : this.state.round + 1,
      result : getGameResult(npcHand,playerHand)
    });
  }

  onClickRoundReset = () => {
    this.setState({
      round : 0
    });
    alert('round 정보가 초기화되었습니다.');
  }

  render() {
    const {onClickStartButton,onClickControlButton,onClickRoundReset} = this;
    const {started,playerSelectedHand,npcSelectedHand,round,result} = this.state;

    return (
      <div className="App">
        <h1>Rock Scissors Paper Game</h1>
        <Starter name="startButton" 
                ButtonText={started ? "Stop" : "Start"} 
                onClickButton={onClickStartButton} />
        <TextBox round={round} result={result} onClickRoundReset={onClickRoundReset} />
        <div className="gamePanel">
          <Hand name="player" 
                started={started}
                selectedHand={playerSelectedHand}/>
          <Hand name="npc" 
                started={started} 
                selectedHand={npcSelectedHand} />
        </div>     
        <Controller onClickButton={onClickControlButton} />   
      </div>
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
적용
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

수정 및 추가
- 디자인
- player, npc의 승리횟수 노출
- 다시 시도 버튼 
- localStorage에 내가 한 게임 라운드 저장해서 랭킹 관리
  confirm으로 유저가 저장, 저장하지 않음을 선택가능
  날짜 정보 저장, 유저 네임 받을 수 있게 하기
- 배경 음악 추가(무료 라이선스 찾기)
  const myAudio = new Audio([sound url]);
  myAudio.play(); 
*/