const initState = {
		country: 'Algeria',
		cases: 0,
		active: 0,
		casesPerOneMillion: 0,
		recovered: 0,
		critical: 0,
    deaths: 0,
    todayCases: 0,
    todayDeaths: 0,
		timeLineArrayConfirmed: {columns: [["confirmed", 0, 10, 10, 10, 10, 10]]}
}


const rootReducer = (state = initState, action)=>{

	switch (action.type){
		case 'setCases':
    	return {...state, ...action.body}
			break;
		case 'setTimeLine':
			return {...state, timeLineArrayConfirmed: action.body}
			break;
	}
	return state
}

export default(rootReducer)
