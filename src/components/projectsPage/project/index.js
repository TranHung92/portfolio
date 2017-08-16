import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import FirstSection from './section-1'
import SecondSection from './section-2'

import '../../../styles/projectsPage/projectx.css'

class Project extends Component {
	render() {
		const { 
			scrollY, 
			background,
			firstText,
			secondText,
			thirdText,
			fourthText,
			fifthText } = this.props;
		return (
			<Motion style={{ x: spring(scrollY, {stiffness: 300, damping: 39}) }}>
				{ ({x}) => (
					<div 
						className="projectX"
						style={{ transform: `translate3d(0, ${x}px, 0)` }}
					>
						<FirstSection 
							background={background} 
							firstText={firstText}
							secondText={secondText}
							thirdText={thirdText}
							fourthText={fourthText}
							fifthText={fifthText}
						/>
						<h1 style={{ paddingTop: "100vh" }}>section-2</h1>
					</div>
				)}
			</Motion>
		)
	}
}

export default Project