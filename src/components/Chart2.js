import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import C3Chart from 'react-c3js'
import 'c3/c3.css'

function Chart2(props){

	const PieChart = ({data})=>
		<C3Chart data={{json: data, type: 'pie'}} />;

	useEffect(()=>{
//		props.setCasesRecoveredDeaths({type: 'setRecoveredDeaths', body: {recovered: [props.recovered], deaths: [props.deaths]}})
	},[props.recovered])

	return(
		<div class='chart-container'>
			<PieChart data={props.timeLineRecoveredDied} />
		</div>
	)
}

const mapStateToProps = (state, ownProps)=>{
	return {
		timeLineRecoveredDied : state.timeLineRecoveredDied,
		recovered: state.casesState.recovered,
		deaths: state.casesState.deaths
	}
}

const mapActionToProps = (dispatch)=>{
	return {setCasesRecoveredDeaths: (data)=>{dispatch(data)}}
}

export default connect(mapStateToProps, mapActionToProps)(Chart2)
