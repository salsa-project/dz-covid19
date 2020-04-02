import React, {useState, useEffect} from 'react'

import {fetchWilayaCases} from '../fetchs/fetchCovid19TimeLine'
import WilayaCases from './WilayaCases'

function  Wilaya(){

	const [items, setItems] = useState()

	useEffect(()=>{

		fetchWilayaCases().then(rs=>{
			const dataElements = Object.entries(rs).map(item=>{
				for(var i = 0; i < item[1].length; ++i){
					var d2 = <WilayaCases key={i} wilayaName={item[1][i].wilayat} wilayaCases={item[1][i].Cas_confirm} percentage={'0%'} />
				}
				return d2
			})
			setItems(dataElements)
		})

	}, [])

	return(
		<div id='wilaya-container'>
			<div id='wilaya-container-header'>
				<p>إسم  الولاية</p>
				<p>عدد الإصابات</p>
				<p>نسبة الإصابات</p>
			</div>
			{items}
		</div>
	)

}

export default(Wilaya)
