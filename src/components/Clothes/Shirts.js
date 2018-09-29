import React, { Component } from 'react';
import './Underwear.css'
import ClothesList from './ClothesList'
class Shirts extends Component {
  state = {
    list_ : [
                  './img/women1.png', './img/women2.png'],
    type:"shirts"
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
export default Shirts;
