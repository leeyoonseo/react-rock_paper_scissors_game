import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component{
  render(){
    const {ButtonText} = this.props;
    return(
      <button type="button">{ButtonText}</button>
    );
  }
}

Button.propTypes = {
  text : PropTypes.string.isRequired
}

export default Button;