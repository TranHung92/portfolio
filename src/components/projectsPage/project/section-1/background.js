import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class Background extends Component {
	render() {
		return (
			<Motion style={{ 
				x: spring(this.props.containerHeight, {stiffness: 300, damping: 39}),
				y: spring(this.props.imageHeight, {stiffness: 300, damping: 39}) 
			}}>
				{ ({ x, y }) => (
					<div
						id="background"
						style={{ 
							transform: "translate3d(0, " + x + "px, 0)" }}
						>
						<img 
							style={{ 
								transform: "translate3d(0, " + y + "px, 0)",
						 	}} 
						 	src={require('../../../../assets/myself.jpg')} alt=""/>
					</div>	
				)}			
			</Motion>	
		)
	}
}

export default Background;