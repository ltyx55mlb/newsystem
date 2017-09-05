import React, { Component } from 'react'


import Lists from './Lists'

class Home extends Component {
  componentWillMount(){
    const { onList } = this.props
    onList()
  }
  render() {
    const { lists } = this.props
    return (
        <Lists
          lists={lists}
        /> 
    )
  }
}

export default Home
