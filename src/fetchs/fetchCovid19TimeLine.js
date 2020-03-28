
export const fetchCasesStats= async ()=>{
  const request= await fetch('https://coronavirus-19-api.herokuapp.com/countries/algeria')
  const response= await request.json();

	return response;
}


export const fetchTimeLine = async ()=>{
	const request = await fetch('https://pomber.github.io/covid19/timeseries.json');
	const response = await request.json();

	return response;
}

