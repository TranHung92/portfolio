import React, { Component } from 'react';

export default class MenuButton extends Component {
	render() {
		return (
			<button id="roundButton" onClick={this.props.onClick}></button>
		)
	}
}