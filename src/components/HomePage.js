import { Motion, spring } from 'react-motion';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

import Background from './Background'
import MenuButton from './MenuButton'
import Menu from './Menu'
import Title from './homePage/title'

var windowHeight = window.innerHeight;

class HomePage extends Component {
	constructor() {
		super();
		this.state = { 
			HomeHeight: windowHeight,
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
		const style = {
			zIndex: 10000,
			// position: 'fixed'
		}
		console.log('params', this.props)
		return (
			<div>
				<Title height={this.state.HomeHeight} />
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