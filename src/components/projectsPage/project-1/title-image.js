import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class TitleImage extends Component {
	render() {
		return (
			<Motion style={{ x: spring(this.props.height, {stiffness: 300, damping: 39}) }}>
				{ ({ x }) => (
					<div
						id="title-image"
						style={{ 
							transform: "translate3d(0, " + x + "px, 0)" }}
						>
						<img style={{ transform: "translate3d(0, " + x/(-1.3) + "px, 0)" }} src={require('../../../assets/myself.jpg')} alt=""/>
					</div>	
				)}			
			</Motion>	
		)
	}
}

export default TitleImage;