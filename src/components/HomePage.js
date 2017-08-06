import { Motion, spring } from 'react-motion';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReallySmoothScroll from 'really-smooth-scroll';

import Background from './Background'
import MenuButton from './MenuButton'
import Menu from './Menu'

// ReallySmoothScroll.shim();
// ReallySmoothScroll.config({
//   mousewheelSensitivity: 6, // Default
//   keydownSensitivity: 6 // Default (When you press arrow down/up key)
// });
class HomePage extends Component {
	constructor() {
		super();
		this.state = { 
			HomeHeight: 200,
			BackgroundHeight: 100,
			visible: false
		}
	}

	onClick (e) {
		this.setState({ visible: !this.state.visible });
		e.stopPropagation();
		// console.log('visible', this.state.visible)
	}

	onWheel (e) {
		// this.setState({
		// 	HomeHeight: e.deltaY > 0 ? this.state.HomeHeight - 10 : this.state.HomeHeight + 10
		// })
		const deltaY = e.wheelDeltaY;
		// if (deltaY > 4) {
		// 	this.setState({ HomeHeight: this.state.HomeHeight - 10 })
		// } 
		// if (deltaY < 4) {
		// 	if (deltaY < 0) {
		// 		this.setState({ HomeHeight: this.state.HomeHeight + 10 })
		// 	}
		// }
		if (deltaY > 0) {
			if (deltaY > 100) {
				this.setState({ HomeHeight: this.state.HomeHeight + 10 })
			} else {
				this.setState({ HomeHeight: this.state.HomeHeight + 1 })
			}
		} else {
			if (deltaY < -100) {
				this.setState({ HomeHeight: this.state.HomeHeight - 10 })
			} else {
				this.setState({ HomeHeight: this.state.HomeHeight - 1 })
			}
		}
		console.log('wheel', e)
	}

	componentDidMount() {
		this.setState({ 
			HomeHeight: 0, 
			BackgroundHeight: -100
		})
		window.addEventListener('wheel', this.onWheel.bind(this))
	}

	componentWillUnmount() {
		window.removeEventListener('wheel', this.onWheel.bind(this))
	}

	render() {
		return (
			<div>
				<Motion style={{ x: spring(this.state.HomeHeight) }}>
					{ ({ x }) => (
						<div
							id='homePage'
							style={{ transform: "translate3d(0, " + x + "vh, 0)" }}
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