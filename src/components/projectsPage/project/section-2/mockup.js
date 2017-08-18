import React, { Component } from 'react'
import { Motion, spring } from 'react-motion';

class Mockup extends Component {
	render() {
		const { mockupWidth, mockupHeight } = this.props;
		console.log(this.props)
		return (
			<Motion style={{ 
				x: spring(mockupWidth, {stiffness: 300, damping: 39}), 
				y: spring(mockupHeight, {stiffness: 300, damping: 39})
			}}>
				{ ({ x, y }) => (
					<div 
						className="mockup"
					>
						<div>
							<img 
								style={{ 
									transform: `translate3d(${this.props.mockupWidth}px, ${y}px, 0)`,
									// transition: 'transform 2s cubic-bezier(.36,.84,.3,1)'
								}}
								src={require('../../../../assets/mockup.jpg')} alt=""
							/>						
						</div>
					</div>
				)}
			</Motion>
		)
			// return (
			// 	<div 
			// 		className="mockup"
			// 	>
			// 		<div>
			// 			<img 
			// 				style={{ 
			// 					transform: `translate3d(${this.props.mockupWidth}px, 0px, 0)`, 
			// 					transition: 'transform 2`s cubic-bezier(.36,.84,.3,1)'
			// 				}}
			// 				src={require('../../../../assets/mockup.jpg')} alt=""
			// 			/>						
			// 		</div>
			// 	</div>
			// )
	}
}

export default Mockup;