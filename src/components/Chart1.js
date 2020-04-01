import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import C3Chart from "react-c3js";
import "c3/c3.css";

import {fetchTimeLine} from './../fetchs/fetchCovid19TimeLine';

function Chart1(props){

	useEffect(()=>{
		fetchTimeLine().then((rs)=>{
      let statsDataConfirmed = {columns: [['حالات مؤكدة']]};
      rs['Algeria'].forEach(({date, confirmed, recovered, deaths})=>{
        statsDataConfirmed.columns[0].push(confirmed)
      })
			props.setTimeLine({type: 'setTimeLine', body: statsDataConfirmed})
		})
	},[])

	return(
		<div class='chart-container'>
			<C3Chart data={props.timeLineArrayConfirmed}/>
		</div>
	)

}

const mapDispatchToProps = (dispatch)=>{
	return{
		setTimeLine: (data)=>{dispatch(data)}
	}
}

const mapStateToProps = (state, ownProps)=>{
	return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart1)
