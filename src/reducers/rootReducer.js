const initState = {
		country: 'Algeria',
		casesState: {
			cases: 0,
			recovered: 0,
			critical: 0,
    	deaths: 0,
    	todayCases: 0,
    	todayDeaths: 0
		},
		active: 0,
    casesPerOneMillion: 0,
		timeLineArrayConfirmed: {columns: [["confirmed", 0, 0, 0, 0, 0, 0]]},
		loader: true
}


const rootReducer = (state = initState, action)=>{

//	console.log(action)

	switch (action.type){
		case 'setCases':
    	return {...state, ...action.body}
			break;
		case 'setTimeLine':
			return {...state, timeLineArrayConfirmed: action.body}
			break;
		case 'setLoaderOff':
			return {...state, loader: false}
			break;
	}
	return state
}

export default(rootReducer)
