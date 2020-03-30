import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchCasesStats} from './../fetchs/fetchCovid19TimeLine'
import Case from './Case'

function Cases (props){

	const [caseTag, setCaseTag] = useState();

	useEffect(()=>{
   	fetchCasesStats().then(rs=>{
			const dataObj = {
				country: rs.country,
    		casesState: {
      		cases: rs.cases,
      		recovered: rs.recovered,
      		critical: rs.critical,
      		deaths: rs.deaths,
      		todayCases: rs.todayCases,
      		todayDeaths: rs.todayDeaths
    		},
    		active: rs.active,
    		casesPerOneMillion: rs.casesPerOneMillion
			}
			props.setCases({type: 'setCases', body: dataObj})
			props.setCases({type: 'setLoaderOff', body: false})
		});
	},[])

	useEffect(()=>{
		const casesClass = ['case-total', 'case-recovered', 'case-died', 'case-today', 'case-today-deaths', 'case-critical']
		const casesTitle = ['مجمل الحالات','حالات الشفاء','حالات الموت','حالات اليوم','توفي اليوم','حالات حرجة']
		const casesCount = [props.casesState.cases, props.casesState.recovered,props.casesState.deaths,props.casesState.todayCases,props.casesState.todayDeaths,props.casesState.critical]

		const newData = Object.entries(props.casesState).map((key, i)=>{
			return <Case key={i} loader={props.loader} caseClass={casesClass[i]} caseTitle={casesTitle[i]} caseCount={casesCount[i]} />
		})
		setCaseTag(newData)
	}, [props.casesState])

  return(
    <div id='cases-container'>
      {caseTag}
    </div>
  )
}

const mapStateToProps = (state, ownProps)=>{

	return {
		country: state.country,
       casesState: {
 	    	 cases: state.casesState.cases,
         recovered: state.casesState.recovered,
         critical: state.casesState.critical,
         deaths: state.casesState.deaths,
         todayCases: state.casesState.todayCases,
         todayDeaths: state.casesState.todayDeaths
       },
       active: state.active,
       casesPerOneMillion: state.casesPerOneMillion,
			 loader: state.loader
	}
}

const mapActionToProps = (dispatch)=>{
	return {
		setCases: (data)=>{dispatch(data)}
	}
}

export default connect(mapStateToProps, mapActionToProps)(Cases)
