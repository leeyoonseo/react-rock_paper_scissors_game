import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Hand.css';

class Hand extends Component{
  constructor(props){
    super(props);
    console.log('hands props',props);
  }
  render(){
    const {name,started} = this.props;
    return(
      <p className={
        started ? name + ' hands started' 
                : name + ' hands' 
      }></p>
    )
  }
}

Hand.propTypes = {
  name : PropTypes.string.isRequired
}

export default Hand;