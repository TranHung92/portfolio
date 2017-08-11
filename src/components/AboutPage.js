import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';


class AboutPage extends Component {



	componentDidMount() {
		this.props.getParams(this.props.location.pathname)
	}

	render() {
		return (
				<div style={{overflow: 'hidden'}} id='aboutPage'>
					<img style={{ marginTop: '200px'}} src={require('../assets/myself.jpg')} alt=""/>
					<img style={{ marginTop: '200px'}} src={require('../assets/myself.jpg')} alt=""/>			
				</div>				
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getParams: bindActionCreators(actions.getParams, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(AboutPage);