import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Draggable, {DraggableCore} from 'react-draggable';



export default class ClothesInfo extends Component {
  state = {
  activeDrags : 0

}

 onStart = () => {
   this.setState({
     activeDrags: ++this.state.activeDrags
   })

 }

 onStop = () => {
   this.setState({
     activeDrags: --this.state.activeDrags
   })

 }




  render(){
    const dragHandlers = {onStart : this.onStart, onStop:this.onStop}
    const { clothes, clothestype } = this.props
    var style = {
      width : '300px',
      height: '300px'

    }
    if (clothestype==="underwear"){
      style = {
        width : '100px',
        height: '70px'
      }
    }
    if (clothestype==="dress"){
      style = {
        width : '200px',
        height: '300px'
      }
    }
    if (clothestype==="shirts"){
      style = {
        width : '230px',
        height: '180px'
      }
    }
    if (clothestype==="shoes"){
      style = {
        width : '100px',
        height: '70px',
        margin : '0px 80px 0px 50px'
      }
    }
    return(
        <Draggable
        {...dragHandlers}

        >

        <img src={clothes} style={style} alt="whatcd"/></Draggable>

    )
  }
}
//golden pants = 60*60
//
