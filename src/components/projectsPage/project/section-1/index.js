import React, { Component } from 'react';

import Slider from '../../../Slider';
import Background from './background';
import Text from './text';

import '../../../../styles/projectsPage/project.css'

var windowHeight = window.innerHeight;

const initialState = {
	titleHeight: windowHeight,
	containerHeight: windowHeight,
	imageHeight: windowHeight,
	sliderHeight: 100
}

class FirstProject extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	onWheel(e) {
		const deltaY = e.deltaY;
		if (this.refs.myRef) {
			if (deltaY > 0) {
				this.setState({ 
					titleHeight: this.state.titleHeight - deltaY/2,
					containerHeight: this.state.containerHeight - deltaY/2,
					imageHeight: this.state.imageHeight - deltaY/2
				})
			} else {
				this.setState({ 
					titleHeight: this.state.titleHeight < windowHeight/2 + deltaY/2 ? this.state.titleHeight - deltaY/2 : windowHeight/2,
					containerHeight: this.state.containerHeight < deltaY/2 ? this.state.containerHeight - deltaY/2 : 0,
					imageHeight: this.state.imageHeight < deltaY/2 ? this.state.imageHeight - deltaY/2 : 0,
				})
			}			
		}
	}

	componentDidMount() {
		this.setState({
			titleHeight: windowHeight/2,
			containerHeight: 0,
			imageHeight: 0,
			sliderHeight: -100
		})
		window.addEventListener('wheel', this.onWheel.bind(this))	
	}

	render() {
		return (
			<div id="project-1" ref="myRef">
				<div>
					<Text height={this.state.titleHeight} />		
					<Background 
						containerHeight={this.state.containerHeight} 
						imageHeight={this.state.imageHeight/(-1.3)}
					/>
				</div>

				<Slider height={this.state.sliderHeight} />
			</div>
		
		)
	}
}

export default FirstProject;