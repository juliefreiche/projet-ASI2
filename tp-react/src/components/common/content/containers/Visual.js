import React, { Component } from 'react';

class Visual extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
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
                render_visual=(
                  <img 
                     className='imgCard' 
                      src={this.props.src}  
                    />
                    );
                break;

                case "video":
                     render_visual=(
                    <object  width="100%" height="100%"
                        data={this.props.src}>
                    </object>
                    );
                break;

                case "web":
                <iframe 
                    src={this.props.src} 
                    width="100%" height="500"
                >
                </iframe>
                break;
            }

            return (
            <div className="thumbnail">
                {render_visual}
            </div>            
            );
  }
}

export default Visual;