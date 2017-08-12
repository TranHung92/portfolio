import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';

class Background extends Component {
	render() {
		const { isLoaded, containerHeight, imageHeight } = this.props
		return (
			<Motion style={{ 
				x: spring(containerHeight, {stiffness: 300, damping: 39}),
				y: spring(imageHeight, {stiffness: 300, damping: 39}) 
			}}>
				{ ({x, y}) => (
					<div
						id="background"
						style={{ 
							transform: `translate3d(0, ${x}px, 0)`,
 						 	transition: `transform ${isLoaded ? 0.02 : 0.2}s cubic-bezier(1,1,0,0)`
						}}
					>
						<img 
							style={{ transform: `translate3d(0, ${y}px, 0)` }} 
						 	src={require('../../../../assets/myself.jpg')} alt=""/>
					</div>	
				)}			
			</Motion>	
		)
	}
}

function mapStateToProps(state) {
	return {
		isLoaded: state.page.isLoaded
	}
}

export default connect(mapStateToProps)(Background);