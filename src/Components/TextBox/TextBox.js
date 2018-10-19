import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextBox.css';

class TextBox extends Component{
  shouldComponentUpdate(nextProps, nextState){
    if(this.props.round !== nextProps.round || this.props.result !== nextProps.result){
      return true;
    }
    return false;
  }
  render(){
    const {round,result} = this.props;
    return(
      <div className="round-pannel">
        <p className="round">Round : <span>{round}</span></p>
        <span id="result" className={result + ' result'}>{result}</span>
      </div>
    )
  }
}

TextBox.propTypes = {
  round : PropTypes.number.isRequired,
  result : PropTypes.string.isRequired
}

export default TextBox;