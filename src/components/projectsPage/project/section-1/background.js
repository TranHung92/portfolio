import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { connect } from 'react-redux';

class Background extends Component {
	render() {
		const { background } = this.props
		return (
			<Motion style={{ 
				x: spring(background, {stiffness: 300, damping: 39}),
			}}>
				{ ({x}) => (
					<div 
						className="background"
						style={{ transform: `translate3d(0, ${x}px, 0)` }} 
					>
						<img src={require('../../../../assets/myself.jpg')} alt=""/>		
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