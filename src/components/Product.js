// Code Product Component Here

import React from 'react'

export default class Product extends React.Component{
  render(){
    return(
      <h1>
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
