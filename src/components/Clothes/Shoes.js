import React, { Component } from 'react';
import './Underwear.css'
import ClothesList from './ClothesList'
class Shoes extends Component {
  state = {
    list_ : [
                   './img/shoes4.png','./img/shoes3.png',],
    type:"shoes"
  }

  render(){
    let style={
      border : '3px solid black',
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
export default Shoes;
