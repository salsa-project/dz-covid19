import React, {useState, useEffect} from 'react'

import {fetchWilayaCases} from '../fetchs/fetchCovid19TimeLine'
import WilayaCases from './WilayaCases'

function  Wilaya(){

	const [dataArray, setDataArray] = useState([]);
	const [items, setItems] = useState();

	useEffect(()=>{
		fetchWilayaCases().then(rs=>{
			const dataElements = Object.entries(rs).map(item=>{
				return item[1]
			})
			setDataArray(dataElements[0])
			})
	}, [])

	useEffect(()=>{
		const result = dataArray.map((item, i)=>{
			return <WilayaCases key={i} wilayaName={item.wilayat} wilayaCases={item.Cas_confirm} percentage={'0%'} />
		})
		setItems(result)
	},[dataArray])

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
