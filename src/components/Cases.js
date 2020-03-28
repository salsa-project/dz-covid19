import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchCasesStats} from './../fetchs/fetchCovid19TimeLine'

function Cases (props){

	useEffect(()=>{
   	fetchCasesStats().then(rs=>{
			props.setCases({type: 'setCases', body: rs})
		});
	},[])

  return(
    <div id='cases-container'>
      <div className='case case-total'>
				<h2>مجمل الحالات</h2>
				<p>{props.cases || 0}</p>
      </div>
      <div className='case case-recovered'>
				<h2>حالات الشفاء</h2>
        <p>{props.recovered || 0}</p>
      </div>
      <div className='case case-died'>
				<h2>حالات الموت</h2>
        <p>{props.deaths || 0}</p>
      </div>
			<div className='case case-today'>
        <h2>حالات اليوم</h2>
        <p>{props.todayCases || 0}</p>
      </div>
			<div className='case case-today-deaths'>
        <h2>توفي اليوم</h2>
        <p>{props.todayDeaths || 0}</p>
      </div>
			<div className='case case-critical'>
        <h2>حالات حرجة</h2>
        <p>{props.critical || 0}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps)=>{
  //console.log(state);
	return {
			country: state.country,
    	cases: state.cases,
    	active: state.active,
    	casesPerOneMillion: state.casesPerOneMillion,
    	recovered: state.recovered,
    	critical: state.critical,
    	deaths: state.deaths,
    	todayCases: state.todayCases,
    	todayDeaths: state.todayDeaths
	}
}

const mapActionToProps = (dispatch)=>{
	return {
		setCases: (data)=>{dispatch(data)}
	}
}

export default connect(mapStateToProps, mapActionToProps)(Cases)
