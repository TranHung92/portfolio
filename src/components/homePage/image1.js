import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import '../../styles/homePage/image1.css'
class Image1 extends Component {
	render() {
		return (
			<div>
				<Motion style={{ x: spring(this.props.height) }}>
					{ ({ x }) => (
						<div
							id="home-image1"
							style={{ transform: "translate3d(0, " + x + "px, 0)" }}
							>
							<img style={{ marginTop: '200px'}} src={require('../../assets/myself.jpg')} alt=""/>
						</div>	
					)}			
				</Motion>					
			</div>

		)
	}
}

export default Image1;