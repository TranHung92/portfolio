import React, { Component } from 'react'
import ReactSmoothScrol from 'react-smooth-scroll';
import ReallySmoothScroll from 'really-smooth-scroll';
// ReallySmoothScroll.shim();

class AboutPage extends Component {
	constructor() {
		super()
	}
	onScroll(e) {
		console.log('scroll')
	}

	componentDidMount() {
		window.onscroll = function() { console.log('scroll'); };
	}

	render() {
		return (
				<div id='aboutPage' onScroll={this.onScroll.bind(this)}>
					<img style={{ marginTop: '200px'}} src={require('../assets/myself.jpg')} alt=""/>
					<img style={{ marginTop: '200px'}} src={require('../assets/myself.jpg')} alt=""/>			
					<button onClick={this.onScroll.bind(this)} >hit me</button>	
				</div>				
		)
	}
}

export default AboutPage;