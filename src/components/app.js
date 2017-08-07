import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuButton from './MenuButton'
import PageContent from './PageContent'
import Menu from './Menu'
import HomePage from './HomePage'

import * as actions from '../actions'

class App extends Component {
	constructor() {
		super();
		this.state = {
			visible: false
		};
	}

	onClick (e) {
		this.props.toggleMenu(this.props.visible);
		e.stopPropagation();
		this.props.resetMenu();
	}

	render() {
		console.log(this.props.zIndex)
		return (
      <div>
      	<MenuButton onClick={this.onClick.bind(this)} />
				<Menu 
					visibleState={this.props.visible}
					// onClick={this.onClick.bind(this)}
				/>
      </div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		resetMenu: bindActionCreators(actions.resetMenuIndex, dispatch),
		toggleMenu: bindActionCreators(actions.toggleMenu, dispatch)
	}
}

function mapStateToProps(state) {
	return {
		visible: state.menu.visible
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);