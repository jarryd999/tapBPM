import React from 'react';
import ReactDOM from 'react-dom';
export default class TapBPM extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      previousTimestamp: null, bpm: null
	    };
	    this.calculateBPM = this.calculateBPM.bind(this);
	}

	calculateBPM() {
		if (this.state.previousTimestamp == null){
			this.state.previousTimestamp = new Date().getTime();
			return;
		}
		let timestamp = new Date().getTime();
		let timeDiff = timestamp - this.state.previousTimestamp;

		let bpm = 60000 / timeDiff;

		this.setState({
			previousTimestamp: timestamp,
			bpm: bpm
		});

	}

	render(){
		return (
			<div id='TapBPM'>
				<div>
				 	<span>{Math.round(this.state.bpm)} &nbsp;</span>
				</div>
				
			 	<button onClick={this.calculateBPM}>Click here</button>
			</div>
		);
	}

}
ReactDOM.render(<TapBPM/>, document.getElementById('tapBPMouter'));