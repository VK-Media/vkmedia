import React, { Component } from 'react';
import logo from './images/logo_cobalt.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div id="temp-content">
					<img id="logo" src={logo} alt="logo" />
					<h1>Hjemmesider og webapps i alle størrelser</h1>
					<p>Vi specialiserer os i at lave hjemmesider og webapps i alle størrelser til alle typer af kunder.</p>
					<p>Er du interesseret i at høre nærmere, kan du kontakte os på nedenstående email</p>
					<a className="color5" href="mailto:kontakt@vkmedia.dk">kontakt@vkmedia.dk</a>
				</div>
			</div>
		);
	}
}

export default App;
