import { Motion, spring } from 'react-motion';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

import Background from './Background'
import MenuButton from './MenuButton'
import Menu from './Menu'

var windowHeight = window.innerHeight;

class HomePage extends Component {
	constructor() {
		super();
		this.state = { 
			HomeHeight: windowHeight * 2,
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
		// console.log('wheel', window)
	}


	componentDidMount() {
		this.setState({ 
			HomeHeight: 0, 
			BackgroundHeight: -100
		})
		// window.addEventListener('touchmove', this.onTouch.bind(this))
		window.addEventListener('wheel', this.onWheel.bind(this))
		setTimeout(this.props.hideMenu, 800)
	}

	componentWillUnmount() {
		window.removeEventListener('wheel', this.onWheel.bind(this))
		// setTimeout(this.props.hideMenu(), 1000)
	}

	render() {

		console.log('params', this.props)
		return (
			<div>
				<h1>hello</h1>
				<Motion style={{ x: spring(this.state.HomeHeight) }}>
					{ ({ x }) => (
						<div
							id='homePage'
							style={{ transform: "translate3d(0, " + x + "px, 0)" }}
							>
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

function mapDispatchToProps(dispatch) {
	return {
		getParams: bindActionCreators(actions.getParams, dispatch),
		hideMenu: bindActionCreators(actions.hideMenu, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(HomePage);