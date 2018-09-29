import React, { Component } from 'react';
import './Clothes.css'
import Underwear from './Underwear'
import Dress from './Dress'
import Shirts from './Shirts'
import Shoes from './Shoes'


class Clothes extends Component {
  render(){
    return(
      <div className="Clothes">
        <Underwear/>
        <Dress/>
        <Shoes/>
        <Shirts/>
      </div>

    )
  }
}
export default Clothes;
