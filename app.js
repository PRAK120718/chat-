import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom';
import Orange from './orange.js'

export default class App extends Component{



	render(){

		//const {store} = this.state;
		return <div className="app-wrapper">

				<Orange />
			</div>
	}
}