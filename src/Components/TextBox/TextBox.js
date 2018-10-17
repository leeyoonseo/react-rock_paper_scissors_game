import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TextBox extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {text} = this.props;
    return(
      <div>{text}</div>
    )
  }
}

//className={result == '' ? "empty" : ""}

TextBox.propTypes = {
  text : PropTypes.string.isRequired
}

export default TextBox;