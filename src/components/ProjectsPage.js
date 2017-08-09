import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class ProjectsPage extends Component {
	componentDidMount() {
		this.props.getParams(this.props.location.pathname);
	}

	render() {
		return (
			<h1>ProjectsPage</h1>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getParams: bindActionCreators(actions.getParams, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(ProjectsPage);