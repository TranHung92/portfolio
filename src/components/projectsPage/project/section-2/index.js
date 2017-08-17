import React, { Component } from 'react'

import Mockup from './mockup'
import Text from './text'

import '../../../../styles/projectsPage/section-2.css'

var windowHeight = window.innerHeight;

const initialState = {
	firstText: windowHeight + 350,
	secondText: windowHeight + 450,
	thirdText: windowHeight + 550,
	mockupWidth: 0,
	mockupHeight: windowHeight,
}

class SecondSection extends Component {

	render() {
		const { 
			firstText, 
			secondText, 
			thirdText, 
			mockupWidth, 
			mockupHeight } = this.props.secondSection;
		return (
			<div className="section-2" ref="section2">
				<Text 
					firstText={firstText}
					secondText={secondText}
					thirdText={thirdText}
				/>
				<Mockup 
					mockupWidth={mockupWidth}
					mockupHeight={mockupHeight}
				/>
			</div>
		)
	}
}

export default SecondSection;