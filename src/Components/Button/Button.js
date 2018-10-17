import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component{
  constructor(props){
    super(props);
    console.log('props',props);
  }
  render(){
    const {ButtonText, onClickButton} = this.props;
    
    return(
      <button type="button" onClick={onClickButton}>{ButtonText}</button>
    );
  }
}

Button.propTypes = {
  ButtonText : PropTypes.string.isRequired
}

export default Button;