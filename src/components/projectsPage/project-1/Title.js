import React, { Component } from 'react';

class Title extends Component {
	render() {
		return (
			<div className="title-image">
				<img src={require('../../../assets/myself.jpg')} alt=""/>
			</div>
		)
	}
}

export default Title;