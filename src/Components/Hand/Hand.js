import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Hand.css';

class Hand extends Component{
  render(){
    const {name,started,selectedHand} = this.props;
    return(
      <p className={
        started ? name + ' hands started' 
                : name + ' hands ' + selectedHand 
      }><span className="text">{name}</span></p>
    )
  }
}

Hand.propTypes = {
  name : PropTypes.string.isRequired,
  started : PropTypes.bool.isRequired
}

export default Hand;