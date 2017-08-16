import React, { Component } from 'react';

import Background from './background';
import Text from './text';

class FirstSection extends Component {
	render() {
		const { firstSection } = this.props;
		return (
			<div className="section-1" ref="myRef">
				<Background 
					background={firstSection.background}
				/>
				<Text 
					firstText={firstSection.firstText}
					secondText={firstSection.secondText}
					thirdText={firstSection.thirdText}
					fourthText={firstSection.fourthText}
					fifthText={firstSection.fifthText}
				/>
			</div>	
		)
	}
}


export default FirstSection;