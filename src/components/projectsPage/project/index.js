import React, { Component } from 'react';

import FirstSection from './section-1'
import SecondSection from './section-2'

class Project extends Component {
	render() {
		return (
			<div>
				<FirstSection />
				<SecondSection />				
			</div>
		)
	}
}

export default Project