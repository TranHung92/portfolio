import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import FirstSection from './section-1'
import SecondSection from './section-2'

import '../../../styles/projectsPage/section-1.css'
import '../../../styles/projectsPage/section-2.css'


class Project extends Component {
	render() {
		const { 
			scrollY, 
			firstSection,
			secondSection, 
		} = this.props;

		const style={
			height: "100vh",
			width: "100vw",
		}		
		return (
			<Motion style={{ x: spring(scrollY, {stiffness: 300, damping: 39}) }}>
				{ ({x}) => (
					<div 
						className="projectX"
						style={{ transform: `translate3d(0, ${x}px, 0)` }}
					>
						<div style={style}>
							<FirstSection 
								firstSection={firstSection}
							/>
						</div>
						<div style={style}>
							<SecondSection 
								secondSection={secondSection}
							/>
						</div>
						<div style={style}>
							<h1>section-3</h1>
						</div>
					</div>
				)}
			</Motion>
		)
	}
}

export default Project