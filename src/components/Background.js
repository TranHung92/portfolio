import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class Background extends Component {
	render() {
		return (
			<Motion style={{ x: spring(this.props.height) }}>
				{ ({ x }) => (
					<div
						id="background"
						style={{ transform: "translate3d(0, " + x + "vh, 0)" }}
						>
					</div>	
				)}			
			</Motion>
		)
	}
}