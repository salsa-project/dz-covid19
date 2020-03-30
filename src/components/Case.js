import React from 'react'

function Case(props){

	return(
		<div className={'case ' + props.caseClass}>
			<h2>{props.caseTitle}</h2>
			{(props.loader) ? <div id='loader'></div> :<p>{props.caseCount}</p>}
		</div>
	)
}

export default(Case)
