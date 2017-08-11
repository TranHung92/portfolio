import React, { Component } from 'react';

import Background from '../../Background';
import TitleImage from './title-image';
import TitleText from './title-text';

import '../../../styles/projectsPage/project-1.css'

var windowHeight = window.innerHeight;

var toggle = true;
class FirstProject extends Component {
	constructor() {
		super();
		this.state = {
			TitleHeight: windowHeight,
			BackgroundHeight: 100
		}
	}

	onWheel(e) {
		const deltaY = e.deltaY;
		if (this.refs.myRef) {
			if (deltaY > 0) {
				this.setState({ TitleHeight: this.state.TitleHeight - deltaY/2 })
			} else {
				this.setState({ TitleHeight: this.state.TitleHeight < deltaY/2 ? this.state.TitleHeight - deltaY/2 : null })
			}			
		}
	}



	componentDidMount() {
		this.setState({
			TitleHeight: 0,
			BackgroundHeight: -100
		})
		window.addEventListener('wheel', this.onWheel.bind(this))	
	}

	render() {
		return (
			<div id="project-1" ref="myRef">
				<div>
					<TitleText height={this.state.TitleHeight} />		
					<TitleImage height={this.state.TitleHeight} />
				</div>

				<Background height={this.state.BackgroundHeight} />
			</div>
		
		)
	}
}

export default FirstProject;