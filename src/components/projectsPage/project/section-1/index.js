import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Slider from '../../../Slider';
import Background from './background';
import Text from './text';
import * as actions from '../../../../actions'; 

class FirstSection extends Component {
	render() {
		const { 
			background,
			firstText,
			secondText,
			thirdText,
			fourthText,
			fifthText,
		} = this.props;
		return (
			<div className="section-1" ref="myRef">
				<Background 
					background={background}
				/>
				<Text 
					firstText={firstText}
					secondText={secondText}
					thirdText={thirdText}
					fourthText={fourthText}
					fifthText={fifthText}
				/>
			</div>	
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadPage: bindActionCreators(actions.loadPage, dispatch),
	}
}

function mapStateToProps(state) {
	return {
		isLoaded: state.page.isLoaded
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstSection);