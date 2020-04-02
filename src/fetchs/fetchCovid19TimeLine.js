
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

export const fetchWilayaCases = async ()=>{
	const request = await fetch('https://bitbucket.org/algcovid/covid19-alg/raw/2e8099ee9f5c91640cfbcc07b5b8f85be1235fa7/covid19-Wilayat-all.json');
	const response = await request.json();

	return response;
}
