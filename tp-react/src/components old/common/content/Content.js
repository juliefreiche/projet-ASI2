import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props); 

    }
  
  render() {
    
        if({this.props.onlyContent}==true){
            let render_visual;
            switch (this.props.type){
                case "img":
                render_visual=(
                    <img 
                     className='imgCard' 
                      src={this.props.src}  
                    />
                );
                break;

                case "img_url":
                break;

                case "video":
                     render_visual=(
                    <object  width="100%" height="100%"
                        data={this.props.src}>
                    </object>
                    );
                break;

                case "web":
                break;
            }

            return (
            <div className="thumbnail">
                {render_visual}
            </div>            
            );


        }
        else{
            return(
            <div>
                <h1>{this.props.title}</h1>
                <h5>ID : {this.props.id}<h5>
                <h5>SRC : {this.props.src}</h5>
                <h5>TYPE : {this.props.type}</h5>
                <h5>onlyContent : {this.props.onlyContent}</h5>
             </div>
             );

        }
  }
}

export default Content;