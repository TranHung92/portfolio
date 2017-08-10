import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import '../../styles/homePage/image1.css'
class Image1 extends Component {


	render() {


		return (
			<div>
				<Motion style={{ x: spring(this.props.height, {stiffness: 300, damping: 39}) }}>
					{ ({ x }) => (
						<div
							id="home-image1"
							style={{ transform: "translate3d(0, " + x + "px, 0)" }}
							>
							<div id="image1">
								<img style={{ transform: "translate3d(0, " + x/(-8) + "px, 0)" }} src={require('../../assets/myself.jpg')} alt=""/>

							</div>
						</div>	
					)}			
				</Motion>					
			</div>

		)
	}
}

export default Image1;