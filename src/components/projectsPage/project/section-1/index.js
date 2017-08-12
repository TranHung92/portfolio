import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Slider from '../../../Slider';
import Background from './background';
import Text from './text';
import * as actions from '../../../../actions'; 

import '../../../../styles/projectsPage/project.css'

var windowHeight = window.innerHeight;

const initialState = {
	firstText: windowHeight,
	secondText: windowHeight,
	thirdText: windowHeight,
	fourthText: windowHeight,
	fifthText: windowHeight,
	containerHeight: windowHeight,
	imageHeight: windowHeight,
	sliderHeight: 100,
}

const mountedState = {
	firstText: windowHeight/4,
	secondText: windowHeight/4 + 100,
	thirdText: windowHeight/4 + 200,
	fourthText: windowHeight/4 + 300,
	fifthText: windowHeight/4 + 400,
	containerHeight: 0,
	imageHeight: 0,
	sliderHeight: -100	
}

class FirstSection extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	onWheel(e) {
		const deltaY = e.deltaY;
		if (this.refs.myRef) {
			this.setState({
				firstText: this.state.firstText < mountedState.firstText + deltaY/1.5 ? this.state.firstText - deltaY/1.5 : mountedState.firstText,
				secondText: this.state.secondText < mountedState.secondText + deltaY/1.6 ? this.state.secondText - deltaY/1.6 : mountedState.secondText,
				thirdText: this.state.thirdText < mountedState.thirdText + deltaY/1.7 ? this.state.thirdText - deltaY/1.7 : mountedState.thirdText,
				fourthText: this.state.fourthText < mountedState.fourthText + deltaY/1.8 ? this.state.fourthText - deltaY/1.8 : mountedState.fourthText,
				fifthText: this.state.fifthText < mountedState.fifthText + deltaY/1.9 ? this.state.fifthText - deltaY/1.9 : mountedState.fifthText,
				containerHeight: this.state.containerHeight < deltaY/2 ? this.state.containerHeight - deltaY/2 : 0,
				imageHeight: this.state.imageHeight > -deltaY/2.5 ? this.state.imageHeight + deltaY/2.5 : 0
			})
		}
	}

	componentDidMount() {
		this.setState(mountedState)
		window.addEventListener('wheel', this.onWheel.bind(this))	
		setTimeout(this.props.loadPage.bind(this.props.isLoaded), 1500)
	}

	render() {
		return (
			<div id="project-1" ref="myRef">
				<div>
					<Text 
						firstText={this.state.firstText}
						secondText={this.state.secondText}
						thirdText={this.state.thirdText}
						fourthText={this.state.fourthText}
						fifthText={this.state.fifthText} />
					<Background 
						containerHeight={this.state.containerHeight} 
						imageHeight={this.state.imageHeight}
					/>
				</div>

				<Slider height={this.state.sliderHeight} />
			</div>
		
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadPage: bindActionCreators(actions.loadPage, dispatch),
	}
}

function mapStateToProps(state) {
	return {
		isLoaded: state.page.isLoaded
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstSection);