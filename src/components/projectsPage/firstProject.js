import React, { Component } from 'react'

import Project from './project'


const initialState = {
	scrollY: 0,
	background: 0,
	firstText: 0,
	secondText: 0,
	thirdText: 0,
	fourthText: 0,
	fifthText: 0
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
				background: this.state.background > -delta/2.5 ? this.state.background + delta/2.5 : 0,
				firstText: this.state.firstText < initialState.firstText + delta/1.5 ? this.state.firstText - delta/1.5 : initialState.firstText,
				secondText: this.state.secondText < initialState.secondText + delta/1.6 ? this.state.secondText - delta/1.6 : initialState.secondText,
				thirdText: this.state.thirdText < initialState.thirdText + delta/1.7 ? this.state.thirdText - delta/1.7 : initialState.thirdText,
				fourthText: this.state.fourthText < initialState.fourthText + delta/1.8 ? this.state.fourthText - delta/1.8 : initialState.fourthText,
				fifthText: this.state.fifthText < initialState.fifthText + delta/1.9 ? this.state.fifthText - delta/1.9 : initialState.fifthText,
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
					background={this.state.background}
					firstText={this.state.firstText}
					secondText={this.state.secondText}
					thirdText={this.state.thirdText}
					fourthText={this.state.fourthText}
					fifthText={this.state.fifthText}
				/>
			</div>
		)
	}
}

export default FirstProject;