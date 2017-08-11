import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

import Slider from '../Slider'
import Title from './title'
import Image1 from './image1'


var windowHeight = window.innerHeight;

class HomePage extends Component {
	constructor() {
		super();
		this.state = { 
			HomeHeight: windowHeight,
			SliderHeight: 100,
			visible: false
		}
	}

	onClick (e) {
		this.setState({ visible: !this.state.visible });
		e.stopPropagation();
	}

	onWheel(e) {
		const deltaY = e.deltaY;
		if (this.refs.myRef) {
			if (deltaY > 0) {
				this.setState({ HomeHeight: this.state.HomeHeight - deltaY/2 })
			} else {
				this.setState({ HomeHeight: this.state.HomeHeight < deltaY/2 ? this.state.HomeHeight - deltaY/2 : null })
			}			
		}
	}


	componentDidMount() {
		this.setState({ 
			HomeHeight: 0, 
			SliderHeight: -100
		})
		window.addEventListener('wheel', this.onWheel.bind(this))
		setTimeout(this.props.hideMenu, 800)
		this.props.getParams(this.props.location.pathname);
	}

	componentWillUnmount() {
		window.removeEventListener('wheel', this.onWheel.bind(this))
	}

	render() {
		return (
			<div id="project" ref="myRef">
				<Title height={this.state.HomeHeight} />
				<Image1 height={this.state.HomeHeight} />									
				<Slider height={this.state.SliderHeight} />			
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