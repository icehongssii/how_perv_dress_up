import React, { Component } from 'react';
import './Avatar.css';
import { Button, Icon } from 'semantic-ui-react'


class Avatar extends Component {
  render(){
    let style = {
      display: 'flex',
    }
    return(
      <div className="Avatar">
        <Button icon labelPosition='right'>
          Next
          <Icon name='right arrow' />
        </Button>
        <p/>
          <img src="./img/face.jpg" style={style} height=""/>
          <img src="./img/body.png" style={style} height="500px"/>


      </div>

    )
  }
}
export default Avatar;
