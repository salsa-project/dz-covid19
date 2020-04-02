import React from 'react'

function WilayaCases(props){

	return(
		<div className='wilaya'>
      <p className='wilaya-name'>{props.wilayaName}</p>
      <p className='wilaya-cases'>{props.wilayaCases}</p>
      <p className='wilaya-percentage'>{props.percentage}</p>
    </div>
	)
}

export default(WilayaCases)
