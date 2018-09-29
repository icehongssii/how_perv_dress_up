import React, { Component } from 'react';
import './Underwear.css'
import ClothesList from './ClothesList'
class Underwear extends Component {
  state = {
    list_ : [
                  './img/leaf.png', './img/elephant.png','./img/vitor.png', './img/acron.png',],
    type:"underwear"
  }

  render(){
    let style={
      border : '3px solid black'

    }
    return(
      <div style={style}>
        <div>
            <ClothesList clotheslist={this.state.list_} clothestype={this.state.type}/>
        </div>

      </div>

    )
  }
}
export default Underwear;
