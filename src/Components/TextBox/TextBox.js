import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextBox.css';

class TextBox extends Component{
  render(){
    const {round,result,onClickRoundReset} = this.props;
    
    return(
      <div>
        <div className="round">Round : <span>{round}</span>
          <button type="button" className="reset" onClick={onClickRoundReset}>reset</button>
        </div>
        <span className={result + ' result'}>{result}</span>
      </div>
    )
  }
}

TextBox.propTypes = {
  round : PropTypes.number.isRequired,
  result : PropTypes.string.isRequired
}

export default TextBox;