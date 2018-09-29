import React, {Component} from 'react';
import './Post.css';
import {Button, Icon} from 'semantic-ui-react';


class Post2 extends Component {
  state={
    files : null
  }

  handleChange = (e) => {
    this.setState({
      files :URL.createObjectURL(e.target.files[0])
    })

  }

  handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData()
    var img = this.state.files
    data.append("file", img)
    data.append("name", "username")
    fetch("http://localhost:8080/upload", {
      mode: 'no-cors',
      method: "POST",

      body: data
    }).then(function (res) {
      if (res.ok) {
        alert("Perfect! ");
      } else if (res.status === 401) {
        alert("Oops! ");
      }
    }, function (e) {
      alert("Error submitting form!");
    });
  }

  render(){
    return(
      <div className="Post">
          <h1>this is for imagetesting</h1>
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <input
              refs="file"
              type="file"
              name="photo"
              onChange={this.handleChange}
            />
            <button type="submit">register</button>
          </form>
          <Button outline color="primary">primary</Button>
          <img src={this.state.files} style={{width:'50px', height:'50px'}}alt="gat" />
      </div>

    )
  }
}

export default Post2;


/*
addFile = (e) => {
  console.log(e.target.files[0]);
  fetch('http://0.0.0.0:8080/sending',{
    method : 'POST',
    headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'},
    body : e.target.files[0]
  }).then(function(req){
    console.log(req);
  })
}
web input -> web
*/
