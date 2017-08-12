import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class Text extends Component {
	render() {
		return (
			<div>
				<Motion style={{ 
					a: spring(this.props.firstText, {stiffness: 300, damping: 39}),
					b: spring(this.props.secondText, {stiffness: 300, damping: 39}),
					c: spring(this.props.thirdText, {stiffness: 300, damping: 39}),
					d: spring(this.props.fourthText, {stiffness: 300, damping: 39}),
					e: spring(this.props.fifthText, {stiffness: 300, damping: 39}),
				}}>
					{ ({ a, b, c, d, e }) => (
						<div id="project-firstSection-text">
							<h1 
								className="title-text"
								style={{ transform: "translate3d(0, " + a + "px, 0)" }}
							>
								firstText
							</h1>
							<h1
								className="title-text"
								style={{ transform: "translate3d(0, " + b + "px, 0)" }}								
							>
								secondText
							</h1>
							<h1
								className="title-text"
								style={{ transform: "translate3d(0, " + c + "px, 0)" }}								
							>
								thirdText
							</h1>
							<h1
								className="title-text"
								style={{ transform: "translate3d(0, " + d + "px, 0)" }}								
							>
								fourthText
							</h1>
							<h1
								className="title-text"
								style={{ transform: "translate3d(0, " + e + "px, 0)" }}								
							>
								fifthText
							</h1>							
						</div>	
					)}			
				</Motion>					
			</div>

		)
	}
}

export default Text;