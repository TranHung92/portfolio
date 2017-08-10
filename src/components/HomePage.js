import { Motion, spring } from 'react-motion';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

import Background from './Background'
import MenuButton from './MenuButton'
import Menu from './Menu'
import Title from './homePage/title'
import Image1 from './homePage/image1'
import {
	firstProjectUrl
} from '../constants'

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
		if (this.refs.myRef) {
			if (deltaY > 0) {
				if (deltaY > 100) {
					this.setState({ HomeHeight: this.state.HomeHeight < 0 ? this.state.HomeHeight + windowHeight / 20 : 0 })
				} else {
					this.setState({ HomeHeight: this.state.HomeHeight < 0 ? this.state.HomeHeight + windowHeight / 150 : 0 })
				}
			} else {
				if (deltaY < -100) {
					this.setState({ HomeHeight: this.state.HomeHeight - windowHeight / 20 })
				} else {
					this.setState({ HomeHeight: this.state.HomeHeight - windowHeight / 150 })
				}
			}			
		}
	}


	componentDidMount() {
		this.setState({ 
			HomeHeight: 0, 
			BackgroundHeight: -100
		})
		// window.addEventListener('touchmove', this.onTouch.bind(this))
		window.addEventListener('wheel', this.onWheel.bind(this))
		setTimeout(this.props.hideMenu, 800)
		this.props.getParams(this.props.location.pathname);
	}

	componentWillUnmount() {
		window.removeEventListener('wheel', this.onWheel.bind(this))
	}

	render() {
		const style = {
			zIndex: 10000,
			// position: 'fixed'
		}
		console.log('params', this.props)
		return (
			<div id="homePage" ref="myRef">
				<Title height={this.state.HomeHeight} />
				<Link to={firstProjectUrl}>
					<Image1 height={this.state.HomeHeight} />									
				</Link>
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