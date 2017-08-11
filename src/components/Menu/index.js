import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuButton from './MenuButton'
import MenuList from './MenuList'

import * as actions from '../../actions'

class Menu extends Component {
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
				<MenuList 
					visibleState={this.props.visible}
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);