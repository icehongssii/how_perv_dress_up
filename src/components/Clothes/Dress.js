import React, { Component } from 'react';
import './Underwear.css'
import ClothesList from './ClothesList'
class Dress extends Component {
  state = {
    list_ : [
                  './img/nirvana.png', './img/weird.png'],
    type:"dress"
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
export default Dress;
