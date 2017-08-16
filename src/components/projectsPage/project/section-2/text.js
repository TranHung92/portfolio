import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class Text extends Component {
	render() {
		const { firstText, secondText, thirdText } = this.props;
		return (
				<Motion style={{
					a: spring(firstText, {stiffness: 300, damping: 39}),
					b: spring(secondText, {stiffness: 300, damping: 39}),
					c: spring(thirdText, {stiffness: 300, damping: 39}),
				}}>
					{ ({ a, b, c }) => (
						<div className="project-secondSection-text">
							<div>
								<h1
									className="section2-text"
									style={{ transform: `translate3d(0, ${a}px, 0)` }}
								>
									firstText
								</h1>
								<h1
									className="section2-text"
									style={{ transform: `translate3d(0, ${b}px, 0)` }}
								>
									secondText
								</h1>
								<h1
									className="section2-text"
									style={{ transform: `translate3d(0, ${c}px, 0)` }}
								>
									thirdText
								</h1>								
							</div>
						</div>
					)}
				</Motion>
		)
	}
}

export default Text;