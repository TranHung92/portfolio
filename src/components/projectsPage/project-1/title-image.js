import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class TitleImage extends Component {
	render() {
		return (
			<Motion style={{ x: spring(this.props.height, {stiffness: 170, damping: 26}) }}>
				{ ({ x }) => (
					<div
						id="title-image"
						style={{ 
							position: 'fixed',
						  top: 0,
						  left: 0,
							transform: "translate3d(0, " + x + "px, 0)" }}
						>
						<img style={{ transform: "translate3d(0, " + x/(-1.5) + "px, 0)" }} src={require('../../../assets/myself.jpg')} alt=""/>
					</div>	
				)}			
			</Motion>	
		)
	}
}

export default TitleImage;