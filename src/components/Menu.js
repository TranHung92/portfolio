import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

import {
	homeRoute,
	aboutRoute,
	projectsRoute
} from '../constants'


class Menu extends Component {
	getVisibleState() {
		if (this.props.visibleState === true) {
			return 0;
		} else {
			return -100;
		}
	}

	render() {
		const toggleMenu = this.props.toggleMenu;
		const setMenuIndex = this.props.setMenuIndex;
		const { currentPage, zIndex } = this.props;
		console.log('thisprop', currentPage)
		return (
			<Motion style={{ x: spring(this.getVisibleState()) }}>
				{ ({ x }) => (
					<div
						onClick={this.props.onClick} 
						id="flyoutMenu"
						style={{ 
							transform: "translate3d(" + x + "vw, 0vw, 0)", 
							zIndex: zIndex
						}}
						>
						<div id="menuSelection">
						  <h1>
						  	<Link 
						  		to={homeRoute}
						  		onClick={ currentPage !== homeRoute ? setMenuIndex : toggleMenu }
						  	>
						  		Home
						  	</Link>
						  </h1>
						  <h1>
						  	<Link 
						  		to={aboutRoute}
						  		onClick={ currentPage !== aboutRoute ? setMenuIndex : toggleMenu }
						  	>
						  		About
						  	</Link>
						  </h1>
						  <h1>
						  	<Link 
						  		to={projectsRoute}
						  		onClick={ currentPage !== projectsRoute ? setMenuIndex : toggleMenu }
						  	>
						  		Projects
						  	</Link>
						  </h1>
						</div>
					</div>	
				)}			
			</Motion>

		)
	}
}

function mapStateToProps(state) {
	return { 
		currentPage: state.route.currentRoute,
		zIndex: state.menu.zIndex
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleMenu: bindActionCreators(actions.toggleMenu, dispatch),
		setMenuIndex: bindActionCreators(actions.setMenuIndex, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)