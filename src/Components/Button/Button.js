import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.css';


class Button extends Component{
  shouldComponentUpdate(nextProps, nextState){
    if(this.props.name !== nextProps.name || this.props.ButtonText !== nextProps.ButtonText){
      return true;
    }
    return false;
  }

  render(){
    const {name, ButtonText, onClickButton} = this.props;

    return(
      <button 
        className={name}
        type="button" 
        onClick={onClickButton}>{ButtonText}</button>    )
  }
}

Button.propTypes = {
  name : PropTypes.string.isRequired,
  ButtonText : PropTypes.string.isRequired
}

export default Button;
