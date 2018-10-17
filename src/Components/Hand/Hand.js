import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Hand.css';

class Hand extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {name} = this.props;
    return(
      <p className={name + ' hands'}></p>
    )
  }
}

Hand.propTypes = {
  name : PropTypes.string.isRequired
}

export default Hand;