import React, { Component } from 'react';
import './Post.css';
import {Button, Icon} from 'semantic-ui-react';
//import {Button, Icon} from 'semantic-ui-react';

class Post extends Component {
  handleClick = (e) => {
    console.log(e.target.value);
  }

  render(){
    return(
      <div className="Post">
          <h1>Title</h1>
          <Button size='massive' value="sandy" onClick={this.handleClick}>1</Button>
          <Button size='massive' value="keith" onClick={this.handleClick}>upload</Button>
          <Button size='massive' value="david" onClick={this.handleClick}>2</Button>
          <Button size='massive' value="tai" onClick={this.handleClick}>3</Button>
          <Button size='massive' value="mike" onClick={this.handleClick}>3</Button>

      </div>

    )
  }
}

export default Post;
