import React, { Component } from 'react';
import ClothesInfo from './ClothesInfo'

class ClothesList extends Component {

  render(){
    const {clotheslist, clothestype} = this.props
    const mapped_clothes = clotheslist.map((value, index) => {
        return <ClothesInfo key={index} clothes={value} clothestype={clothestype} />
    })
    return(
      <div>
        {mapped_clothes}
      </div>
    )
  }
}


export default ClothesList;
