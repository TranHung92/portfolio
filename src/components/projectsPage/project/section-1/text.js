import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class Text extends Component {
	render() {
		const { 
			firstText, 
			secondText, 
			thirdText, 
			fourthText, 
			fifthText
		} = this.props;
		return (
			<Motion style={{ 
				a: spring(firstText, {stiffness: 300, damping: 39}),
				b: spring(secondText, {stiffness: 300, damping: 39}),
				c: spring(thirdText, {stiffness: 300, damping: 39}),
				d: spring(fourthText, {stiffness: 300, damping: 39}),
				e: spring(fifthText, {stiffness: 300, damping: 39}),
			}}>
				{ ({ a, b, c, d, e }) => (
					<div className="project-firstSection-text">
						<h1 
							className="title-text"
							style={{ transform: `translate3d(0, ${a}px, 0)` }}
						>
							firstText
						</h1>
						<h1
							className="title-text"
							style={{ transform: `translate3d(0, ${b}px, 0)` }}								
						>
							secondText
						</h1>
						<h1
							className="title-text"
							style={{ transform: `translate3d(0, ${c}px, 0)` }}								
						>
							thirdText
						</h1>
						<h1
							className="title-text"
							style={{ transform: `translate3d(0, ${d}px, 0)` }}								
						>
							fourthText
						</h1>
						<h1
							className="title-text"
							style={{ transform: `translate3d(0, ${e}px, 0)` }}								
						>
							fifthText
						</h1>							
					</div>	
				)}			
			</Motion>	
		)
	}
}

export default Text;