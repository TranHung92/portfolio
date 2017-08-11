import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class Slider extends Component {
	render() {
		return (
			<Motion style={{ x: spring(this.props.height, {stiffness: 300, damping: 39}) }}>
				{ ({ x }) => (
					<div
						id="slider"
						style={{ transform: "translate3d(0, " + x + "vh, 0)" }}
						>
					</div>	
				)}			
			</Motion>
		)
	}
}