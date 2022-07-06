const BASE_URL="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41";

const getWeatherData = (infoType) => {
    const url = new URL(BASE_URL+ "&" + infoType);

    console.log(url);
    
    return fetch(url).then((res) => res.json())
};

const formatCurrentWeather=(data)=>{
    const {
        hourly:{temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m}
    }=data

    return {temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m}
}

const formattedForecastWeather=(data)=>{
    let {hourly}=data;
    hourly=hourly.slice()

    return { ...formatCurrentWeather, ...formattedForecastWeather };
}

const getFormattedWeatherData=async(searchParams)=>{
    const formattedWeatherData=await getWeatherData("hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m",searchParams).then(formatCurrentWeather)

    const {latitude,longitude}=formatCurrentWeather
    const formatForecastWeather=await getWeatherData({latitude,longitude}).then(formattedForecastWeather);
    
    return formattedWeatherData
}

export default getFormattedWeatherData