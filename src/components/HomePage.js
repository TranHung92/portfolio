import { Motion, spring } from 'react-motion';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Background from './Background'
import MenuButton from './MenuButton'
import Menu from './Menu'
import ReallySmoothScroll from 'really-smooth-scroll';
// ReallySmoothScroll.shim();
var windowHeight = window.innerHeight;

class HomePage extends Component {
	constructor() {
		super();
		this.state = { 
			HomeHeight: window.innerHeight * 2,
			BackgroundHeight: 100,
			visible: false
		}
	}

	onClick (e) {
		this.setState({ visible: !this.state.visible });
		e.stopPropagation();
	}

	onWheel (e) {
		const deltaY = e.wheelDeltaY;
		if (deltaY > 0) {
			if (deltaY > 100) {
				this.setState({ HomeHeight: this.state.HomeHeight < 0 ? this.state.HomeHeight + windowHeight / 10 : 0 })
			} else {
				this.setState({ HomeHeight: this.state.HomeHeight < 0 ? this.state.HomeHeight + windowHeight / 100 : 0 })
			}
		} else {
			if (deltaY < -100) {
				this.setState({ HomeHeight: this.state.HomeHeight - windowHeight / 10 })
			} else {
				this.setState({ HomeHeight: this.state.HomeHeight - windowHeight / 100 })
			}
		}
		console.log('wheel', window)
	}

	onTouch(e) {
		console.log('touch', e.changedTouches[0])
	}

	componentDidMount() {
		this.setState({ 
			HomeHeight: 0, 
			BackgroundHeight: -100
		})
		window.addEventListener('touchmove', this.onTouch.bind(this))
		window.addEventListener('wheel', this.onWheel.bind(this))
	}

	componentWillUnmount() {
		window.removeEventListener('wheel', this.onWheel.bind(this))
	}

	render() {
		// console.log('window', window.screenX)
		return (
			<div>
				<Motion style={{ x: spring(this.state.HomeHeight) }}>
					{ ({ x }) => (
						<div
							id='homePage'
							style={{ transform: "translate3d(0, " + x + "px, 0)" }}
							>
							<MenuButton onClick={this.onClick.bind(this)} />
							<Menu 
								visibleState={this.state.visible}
								onClick={this.onClick.bind(this)}
							/>
							<h1>HomePage</h1>
							<img style={{ marginTop: '100px'}} src={require('../assets/myself.jpg')} alt=""/>
							<img style={{ marginTop: '100px'}} src={require('../assets/myself.jpg')} alt=""/>
						</div>	
					)}			
				</Motion>	
				<Background height={this.state.BackgroundHeight} />			
			</div>				
		)
	}
}

export default HomePage;