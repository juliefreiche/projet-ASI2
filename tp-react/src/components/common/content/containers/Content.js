import React, { Component } from 'react';

import Visual from './Visual';
import MetaData from './MetaData';

class Content extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {

    let visual;


    if(this.props.onlyContent==true){
               visual = (<Visual 
                        type={this.props.type} 
                        src={this.props.src} 
                    />);
               
            }
        else {
                visual = (<MetaData
                            id ={this.props.id} 
                            title ={this.props.title} 
                            src ={this.props.src} 
                            type={this.props.type}
                />);
            }
    return (
            <div className="thumbnail">
                {visual}
            </div>            
    );
    }
}

export default Content;