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
	constructor() {
		super();
		this.state = initialState;
	}

	onWheel(e) {
		var deltaY = e.deltaY;
		var firstTextSpeed, secondTextSpeed, thirdTextSpeed;
		var minDistance = this.state.secondText - this.state.firstText
		if (this.state.firstText >= windowHeight/2) {
			firstTextSpeed = deltaY/1.7;
			secondTextSpeed = deltaY/1.6;
			thirdTextSpeed = deltaY/1.5;
		} else {
			firstTextSpeed = deltaY/1.5;
			secondTextSpeed = deltaY/1.6;
			thirdTextSpeed = deltaY/1.7;			
		}

		if (this.refs.section2) {
			this.setState({
				firstText: this.state.firstText - firstTextSpeed,
				secondText: this.state.secondText - secondTextSpeed, 
				thirdText: this.state.thirdText - thirdTextSpeed,
				mockupHeight: this.state.mockupHeight - deltaY/2,
			})
			if (this.state.firstText < windowHeight) {
				this.setState({ mockupWidth: 0 })
			}	
		}

	}

	componentDidMount() {
		window.addEventListener('wheel', this.onWheel.bind(this))
	}

	render() {
		const { secondSection } = this.props;
		return (
			<div className="section-2" ref="section2">
				<Text 
					firstText={secondSection.firstText}
					secondText={secondSection.secondText}
					thirdText={secondSection.thirdText}
				/>
				<Mockup />
			</div>
		)
	}
}

export default SecondSection;