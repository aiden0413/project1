import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather  = () => {

    const [state, setState] = useState({ temp: 0, desc: '', icon: '', loading: true })

    useEffect(()=>{
        const cityName = 'Seoul';
        const apiKey = '084c3808739f5624eb95f1489adf9c0a';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        axios.get(url)
            .then(responseData => {
                console.log(responseData);
                const data = responseData.data;
                setState({
                    temp: data.main.temp,
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon,
                    loading: false
                });
            })
            .catch(error => console.log(error));
    },[])

    const imgSrc = `http://openweathermap.com/img/w/${state.icon}.png`;
    if (state.loading) {
        return <p>Loading</p>;
    } else {
        return (
            <div className="App flex flex-row">
                <div>
                <img src={imgSrc}/>
                </div>
                <div>
                <p>{Math.round((state.temp-273.15) * 100) / 100}°C</p>
                <p>{state.desc}</p>
                </div>
            </div>
        );
    }
}

export default Weather;