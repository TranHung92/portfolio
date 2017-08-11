import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

import {
	homeUrl,
	aboutUrl,
	projectsUrl
} from '../../constants'


class MenuList extends Component {
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
						  		to={homeUrl}
						  		onClick={ currentPage !== homeUrl ? setMenuIndex : toggleMenu }
						  	>
						  		Home
						  	</Link>
						  </h1>
						  <h1>
						  	<Link 
						  		to={aboutUrl}
						  		onClick={ currentPage !== aboutUrl ? setMenuIndex : toggleMenu }
						  	>
						  		About
						  	</Link>
						  </h1>
						  <h1>
						  	<Link 
						  		to={projectsUrl}
						  		onClick={ currentPage !== projectsUrl ? setMenuIndex : toggleMenu }
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)