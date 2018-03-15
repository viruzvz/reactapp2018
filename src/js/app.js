import React, { Component } from 'react';
import { render } from 'react-dom';


function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

function App() {
	return (
		<div>
			<Welcome name='Sara' />
			<Welcome name='Tara' />
			<Welcome name='Cara' />
		</div>
	)
}
render(<App />, document.getElementById('app'));