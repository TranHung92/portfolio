import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class TitleText extends Component {
	render() {
		return (
			<div>
				<Motion style={{ x: spring(this.props.height, {stiffness: 300, damping: 39}) }}>
					{ ({ x }) => (
						<div
							id="title-text"
							style={{ transform: "translate3d(0, " + x + "px, 0)" }}
							>
							<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta delectus dolorum natus</h1>
						</div>	
					)}			
				</Motion>					
			</div>

		)
	}
}

export default TitleText;