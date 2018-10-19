import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Hand.css';

class Hand extends Component{
  shouldComponentUpdate(nextProps, nextState){
    if(this.props.started !== nextProps.started 
      || this.props.playerName !== nextProps.playerName
      || this.props.selectedHand !== nextProps.selectedHand){
      return true;
    }
    return false;
  }
  render(){
    const {name,playerName,started,selectedHand} = this.props;
    return(
      <p className={
        started ? name + ' hands started' 
                : name + ' hands ' + selectedHand 
      }><span className="text">{playerName ? playerName : name}</span></p>
    )
  }
}

Hand.propTypes = {
  name : PropTypes.string.isRequired,
  playerName : PropTypes.string,
  started : PropTypes.bool.isRequired
}

export default Hand;