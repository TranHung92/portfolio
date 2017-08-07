import React, { Component } from 'react'

import MenuButton from './MenuButton'
import PageContent from './PageContent'
import Menu from './Menu'
import Background from './Background'
import ReallySmoothScroll from 'really-smooth-scroll';

// ReallySmoothScroll.shim();

class App extends Component {
	constructor() {
		super();
		this.state = {
			visible: false
		};
	}

	onClick (e) {
		this.setState({ visible: !this.state.visible });
		e.stopPropagation();
		// console.log('visible', this.state.visible)
	}

	render() {

		return (
      <div>
      	<MenuButton onClick={this.onClick.bind(this)} />
				<Menu 
					visibleState={this.state.visible}
					onClick={this.onClick.bind(this)}
				/>
      	<PageContent />
      </div>
		)
	}
}

export default App;