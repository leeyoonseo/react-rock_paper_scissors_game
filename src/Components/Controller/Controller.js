import React, {Component} from 'react';
import Button from '../Button';

class Controller extends Component{
  render(){
    return(
      <div>
        <Button ButtonText="가위"/>
        <Button ButtonText="바위"/>
        <Button ButtonText="보"/>
      </div>
    )
  }
}

export default Controller;