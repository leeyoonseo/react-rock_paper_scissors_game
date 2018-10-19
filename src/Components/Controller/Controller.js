import React, {Component} from 'react';
import './Controller.css';

class Controller extends Component{
   render(){
    const {onClickButton} = this.props;
    const arr = [
      { id : "scissors", text : "scissors"},
      { id : "rock", text : "rock" },
      { id : "paper", text : "paper"}
    ];

    return(
      <div className="controller">
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