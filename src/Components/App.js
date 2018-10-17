import React, { Component } from 'react';
import Button from './Button';
import Title from './Title';
import Hand from './Hand';
import Controller from './Controller';
import './App.css';

class App extends Component {
  state = {
    started : false,
    round : '',
    ranking : '',
    result : ''
  }

  onClickButton = () => {
    console.log('onClickButton');
    this.setState({
      started : true
    });
  }

  render() {
    const {onClickButton} = this;
    const {started} = this.state;

    return (
      <div className="App">
        <Title title="Rock Scissors Paper" />
        <Button ButtonText="시작" onClickButton={onClickButton} />
        <Hand name="player" started={started} />
        <Hand name="npc" started={started} />     
        <Controller />   
      </div>
    );
  }
}

export default App;

/*
- 시작 클릭 실행
- 이미지 애니메이션
- 컨트롤 버튼 클릭 시 랜덤 확률로 결과
- 결과도 이미지 보여줄 것(player, npc 둘다)
- 확률 : 80% ~ 1%로 하락(일정한 규칙 만들 것)
- 승, 패 라운드 횟수 노출
- 버튼 연속 클릭 시 결과 나오는 도중이면 실행x
- 다시 시도 버튼 
- localStorage에 내가 한 게임 라운드 저장해서 표현(볼 수 있게 할 것, 최다 승 라운드 같이?)
*/