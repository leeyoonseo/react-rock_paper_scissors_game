import React, {Component} from 'react';
import './Controller.css';

class Controller extends Component{
   render(){
    const {onClickButton} = this.props;
    const arr = [
      { id : "rock", text : "바위" },
      { id : "scissors", text : "가위"},
      { id : "paper", text : "보"}
    ];

    return(
      <div>
        {
          arr.map((el,i)=>{
            return(
              <button
                key={i}
                id={el.id}
                className="controlButton" 
                onClick={onClickButton}>{el.text}</button>
            );
          })
        }
      </div>
    )
  }
}

export default Controller;