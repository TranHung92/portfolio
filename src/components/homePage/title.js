import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import '../../styles/homePage/title.css'
class Title extends Component {
	render() {
		return (
			<div>
				<Motion style={{ x: spring(this.props.height) }}>
					{ ({ x }) => (
						<div
							id="home-title"
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

export default Title;