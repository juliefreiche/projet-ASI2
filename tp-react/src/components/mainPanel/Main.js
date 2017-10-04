import React from 'react';
import './main.css';
import Content from '../common/content/containers/Content';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import * as contentMapTmp from '../../source/contentMap.json';

export default class Main extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			contentMap:contentMapTmp,
			onlyContent:true,
		}
	}

	render() {
		return (

			<div className='container-fluid height-100'>
				<div className="row height-100">
					<div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
					</div>
					<div className='col-md-6 col-lg-6 height-100'>
						
						<Content 
							id ={this.state.contentMap[2].id} 
							title ={this.state.contentMap[2].title} 
							src ={this.state.contentMap[2].src} 
							type={this.state.contentMap[2].type}
							onlyContent={this.state.onlyContent}> 
						</Content>

					</div>
					<div className='col-md-3 col-lg-3 height-100'>
					</div>
				</div>
			</div>
		);
	}
}