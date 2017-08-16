import React, { Component } from 'react'

import Project from './project'


const initialState = {
	scrollY: 0,
	firstSection: {
		background: 0,
		firstText: 0,
		secondText: 0,
		thirdText: 0,
		fourthText: 0,
		fifthText: 0		
	},
	secondSection: {
		firstText: 0,
		secondText: 0,
		thirdText: 0,
	}
}

class FirstProject extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	onWheel(e) {
		const delta = e.deltaY;
		if (this.refs.myRef) {
			this.setState({
				scrollY: this.state.scrollY < delta/2 ? this.state.scrollY - delta/2 : 0,
			});
			this.setFirstSectionState(delta);
			this.setSecondSectionState(delta);
		}
	}

	setFirstSectionState(delta) {
		this.setState({
			firstSection: {
				background: this.state.firstSection.background > -delta/2.5 ? 
					this.state.firstSection.background + delta/2.5 : 0,
				firstText: this.state.firstSection.firstText < initialState.firstSection.firstText + delta/1.5 ? 
					this.state.firstSection.firstText - delta/1.5 : initialState.firstSection.firstText,
				secondText: this.state.firstSection.secondText < initialState.firstSection.secondText + delta/1.6 ? 
					this.state.firstSection.secondText - delta/1.6 : initialState.firstSection.secondText,
				thirdText: this.state.firstSection.thirdText < initialState.firstSection.thirdText + delta/1.7 ? 
					this.state.firstSection.thirdText - delta/1.7 : initialState.firstSection.thirdText,
				fourthText: this.state.firstSection.fourthText < initialState.firstSection.fourthText + delta/1.8 ? 
					this.state.firstSection.fourthText - delta/1.8 : initialState.firstSection.fourthText,
				fifthText: this.state.firstSection.fifthText < initialState.firstSection.fifthText + delta/1.9 ? 
					this.state.firstSection.fifthText - delta/1.9 : initialState.firstSection.fifthText,
			}
		})
	}

	setSecondSectionState(delta) {
		var firstTextSpeed, secondTextSpeed, thirdTextSpeed;
		if (this.state.secondSection.secondText >= window.innerHeight/2) {
			firstTextSpeed = delta/1.7;
			secondTextSpeed = delta/1.6;
			thirdTextSpeed = delta/1.5;
		} else {
			firstTextSpeed = delta/1.5;
			secondTextSpeed = delta/1.6;
			thirdTextSpeed = delta/1.7;			
		}
		this.setState({
			secondSection: {
				firstText: this.state.secondSection.firstText - firstTextSpeed,
				secondText: this.state.secondSection.secondText - secondTextSpeed,
				thirdText: this.state.secondSection.thirdText - thirdTextSpeed,
			}
		})
	}

	componentDidMount() {
		window.addEventListener('wheel', this.onWheel.bind(this))
	}

	render() {
		return (
			<div ref="myRef">
				<Project 
					scrollY={this.state.scrollY}
					firstSection={this.state.firstSection}
					secondSection={this.state.secondSection}
				/>
			</div>
		)
	}
}

export default FirstProject;