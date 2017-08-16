import React, { Component } from 'react'
import { Motion, spring } from 'react-motion';

class Mockup extends Component {
	render() {
		return (
			<Motion style={{ 
				x: spring(this.props.mockupWidth, {stiffness: 300, damping: 39}), 
				y: spring(this.props.mockupHeight, {stiffness: 300, damping: 39})
			}}>
				{ ({ x, y }) => (
					<div 
						className="mockup"
						style={{ transform: `translate3d(0, ${y}px, 0)` }}
					>
						<h1>mockup</h1>
					</div>
				)}
			</Motion>
		)
	}
}

export default Mockup;