import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';

import '../../styles/homePage/image1.css'

import {
	firstProjectUrl
} from '../../constants'

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
							<Link to={firstProjectUrl}>
								<div id="image1">
									<img style={{ transform: "translate3d(0, " + x/(-8) + "px, 0)" }} src={require('../../assets/myself.jpg')} alt=""/>
								</div>								
							</Link>

						</div>	
					)}			
				</Motion>					
			</div>

		)
	}
}

export default Image1;