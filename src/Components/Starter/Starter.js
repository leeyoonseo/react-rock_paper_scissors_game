import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Starter.css';

class Starter extends Component{
  render(){
    const {name, ButtonText, onClickButton} = this.props;
    return(
      <button 
        className={name}
        type="button" 
        onClick={onClickButton}>{ButtonText}</button>
    )
  }
}

Starter.propTypes = {
  name : PropTypes.string.isRequired,
  ButtonText : PropTypes.string.isRequired
}

export default Starter;