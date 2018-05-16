// Code Product Component Here

import React from 'react'

export default class Product extends React.Component{
  render(){
    return(
      <div>
        <h1> This is {this.props.name} of product </h1> <br/>
        <small>
      </div>
    )
  }
}

Product.defaults = {
  hasWatermark: false,

}

Product.proptypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired
  weight: PropTypes.range(80,300).isRequired
}
