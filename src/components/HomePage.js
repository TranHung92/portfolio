import { Motion, spring } from 'react-motion';
import React, { Component } from 'react'

import Background from './Background'

class HomePage extends Component {
	constructor() {
		super();
		this.state = { 
			HomeHeight: 200,
			BackgroundHeight: 100
		}
	}

	componentDidMount() {
		this.setState({ 
			HomeHeight: 0, 
			BackgroundHeight: -100
		})
	}

	render() {
		// const defaultStyle = {
		// 	width: '100vw',
  //     height: '100vh',
		// 	backgroundColor: '#00ffd2',
		// 	position: 'fixed',
  //     top: 0,
  //     left: 0,
  //     transform: 'translate3d(0, 100vh, 0)',
  //     transition: 'transform .1s cubic-bezier(.56,.3,0,1)',
  //     zIndex: 1000,
		// }

		return (
			<div>
				<Motion style={{ x: spring(this.state.HomeHeight) }}>
					{ ({ x }) => (
						<div
							id='homePage'
							style={{ transform: "translate3d(0, " + x + "vh, 0)" }}
							>
							<h1>HomePage</h1>
						</div>	
					)}			
				</Motion>	
				<Background height={this.state.BackgroundHeight} />			
			</div>

		)
	}
}

export default HomePage;