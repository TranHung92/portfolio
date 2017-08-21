import React, { Component } from 'react'

import Project from './project'

var windowHeight = window.innerHeight;

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
		firstText: 300,
		secondText: 300,
		thirdText: 300,
		mockupWidth: 700,
		mockupHeight: 100,
	}
};


class FirstProject extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	onWheel(e) {
		console.log('window', window.screenY)
		const delta = e.deltaY;
		if (this.refs.myRef) {
			this.setState({
				scrollY: this.state.scrollY < delta/2 ? this.state.scrollY - delta/2 : 0,
			});
			this.setFirstSectionState(delta);
			this.setSecondSectionState(delta);
		}
		// console.log('scrollY', this.state.scrollY)
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
		const { scrollY } = this.state;
		var firstTextSpeed, secondTextSpeed, thirdTextSpeed;
			if (scrollY > -windowHeight) {
				firstTextSpeed = delta/2.3;
				secondTextSpeed = delta/2.2;
				thirdTextSpeed = delta/2.1;
			} else {
				firstTextSpeed = delta/2.1;
				secondTextSpeed = delta/2.2;
				thirdTextSpeed = delta/2.3;			
			}
	
		if (scrollY < 0 && (scrollY > (-2 * windowHeight))) {
			this.setState({
				secondSection: {
					firstText: this.state.secondSection.firstText - firstTextSpeed/2,
					secondText: this.state.secondSection.secondText - secondTextSpeed/2,
					thirdText: this.state.secondSection.thirdText - thirdTextSpeed/2,
					mockupWidth: scrollY < -windowHeight/12 ? 0 : initialState.secondSection.mockupWidth,
					mockupHeight: this.state.secondSection.mockupHeight - delta/20,
				}
			})
		}
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