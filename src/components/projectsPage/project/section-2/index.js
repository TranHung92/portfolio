import React, { Component } from 'react'

import Mockup from './mockup'
import Text from './text'

import '../../../../styles/projectsPage/section-2.css'

var windowHeight = window.innerHeight;

const initialState = {
	firstText: windowHeight + 350,
	secondText: windowHeight + 450,
	thirdText: windowHeight + 550,
}

class SecondSection extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	onWheel(e) {
		const deltaY = e.deltaY;
		const minDistance = this.state.secondText - this.state.firstText
		if (this.refs.section2) {
			this.state.secondText > windowHeight/2 ?
			this.setState({
				firstText: this.state.firstText - deltaY/1.7,
				secondText: this.state.secondText - deltaY/1.6, 
				thirdText: this.state.thirdText - deltaY/1.5,
			}) :
			this.setState({
				firstText: this.state.firstText - deltaY/1.5,
				secondText: this.state.secondText - deltaY/1.6, 
				thirdText: this.state.thirdText - deltaY/1.7,
			})				
		}

	}

	componentDidMount() {
		window.addEventListener('wheel', this.onWheel.bind(this))
	}

	render() {
		return (
			<div id="section-2" ref="section2">
				<Text 
					firstText={this.state.firstText}
					secondText={this.state.secondText}
					thirdText={this.state.thirdText}
				/>
				<Mockup />
			</div>
		)
	}
}

export default SecondSection;