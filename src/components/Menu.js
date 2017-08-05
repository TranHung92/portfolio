import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom'

export default class Menu extends Component {
	getVisibleState() {
		if (this.props.visibleState === true) {
			return 0;
		} else {
			return -100;
		}
	}

	render() {
		return (
			<Motion style={{ x: spring(this.getVisibleState()) }}>
				{ ({ x }) => (
					<div
						onClick={this.props.onClick} 
						id="flyoutMenu"
						style={{ transform: "translate3d(" + x + "vw, 0vw, 0)" }}
						>
					  <h2><Link to="/home">Home</Link></h2>
					  <h2><Link to="/about">About</Link></h2>
					</div>	
				)}			
			</Motion>

		)
	}
}