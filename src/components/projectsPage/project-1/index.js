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
	onScroll(e) {
		console.log('onScroll', window.scrollY)
	}

	onWheel(e) {
		// console.log('onScroll', e)

		const deltaYY = e.wheelDeltaY;
		if (this.refs.myRef) {
			if (deltaYY > 0) {
				// if (deltaY > 100) {
				// 	this.setState({ TitleHeight: this.state.TitleHeight < 0 ? this.state.TitleHeight + windowHeight / 20 : 0 })
				// } else {
				// 	this.setState({ TitleHeight: this.state.TitleHeight < 0 ? this.state.TitleHeight + windowHeight / 150 : 0 })
				// 	this.setState({ TitleHeight: this.state.TitleHeight < 0 ? this.state.TitleHeight + windowHeight / 150 : 0 })
				// }
				this.setState({ TitleHeight: this.state.TitleHeight + e.deltaY/2 })
				console.log('roll up')
			} else {
				// if (deltaY < -100) {
				// 	this.setState({ TitleHeight: this.state.TitleHeight - windowHeight / 20 })
				// } else {
				// 	this.setState({ TitleHeight: this.state.TitleHeight - windowHeight / 150 })
				// }
				console.log('roll down')
				this.setState({ TitleHeight: this.state.TitleHeight < 0 ? this.state.TitleHeight + e.deltaY/2 : 0 })
			}			
		}
	}

	onClick() {
		if (this.refs.myRef) {
			if (toggle) {
				toggle = false;
				this.setState({ TitleHeight: this.state.TitleHeight - 400 })
			} else {
				toggle = true;
				this.setState({ TitleHeight: this.state.TitleHeight + 400 })
			}
		}
	}

	componentDidMount() {
		this.setState({
			TitleHeight: 0,
			BackgroundHeight: -100
		})
		window.addEventListener('wheel', this.onWheel.bind(this))	
		// window.addEventListener('scroll', this.onScroll.bind(this))
	}

	render() {
		return (
			<div id="project-1" ref="myRef">
				<div>
					<TitleText height={this.state.TitleHeight} />		
					<button 
						style={{
							zIndex: 1000,
							position: 'fixed',
							left: '50vw'
						}} onClick={this.onClick.bind(this)}>scroll</button>
					<TitleImage height={this.state.TitleHeight} />
				</div>

				<Background height={this.state.BackgroundHeight} />
			</div>
		
		)
	}
}

export default FirstProject;