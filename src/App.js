import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import './App.css'
import Cases from './components/Cases'
import Chart1 from './components/Chart1'
import Chart2 from './components/Chart2'
import db from './configs/db'

function App(props){

  return(
    <div>
			<div id='header'>
	  		<h1>إحصائيات فيروس كورونا في<span> {props.country}</span>
				</h1>
	  		<p></p>
			</div>
			<Cases />
			<h3>منحنى تطور الحالات المصابة</h3>
			<Chart1 />
			<h3>دائرة بيانية لحالات الشفاء/الوفاة</h3>
			<Chart2 />
    </div>
  )

}

const mapStateToProps= (state, ownProps)=>{
	return state;
}

export default connect(mapStateToProps)(App)


