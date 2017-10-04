import React, { Component } from 'react';

class MetaData extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
    return (
                <div>

                    <h1>{this.props.title}</h1>
                    <h5>ID: {this.props.id} </h5> 
                    <h5>Source:{this.props.src} </h5> 
                    <h5>type:{this.props.type} </h5>    
   
                </div>
 
    );
  }
}

export default MetaData;