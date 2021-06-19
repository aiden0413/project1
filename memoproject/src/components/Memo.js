import React from "react";
import { Link } from 'react-router-dom';
import { convertToRaw } from 'draft-js';

function Memo({
    id="",
    title="",
    content="",
    date="",
    weather=""
}) {
    const imgSrc = `http://openweathermap.com/img/w/${weather.icon}.png`;

    const temp = Math.round((weather.temp-273.15) * 100) / 100;
    
    let memobg = "flex flex-col gap-3 p-3";
    let titlebg =""
    let contentbg = "h-300px"
    let datebg = "flex flex-row justify-between items-center"
    if(temp >= 30){
        memobg+=" bg-red-200"
        titlebg+=" bg-red-100"
        contentbg+=" bg-red-100"
        datebg+=" bg-red-100"
    }
    else if(temp >20 && temp < 30){
        memobg+=" bg-yellow-200"
        titlebg+=" bg-yellow-100"
        contentbg+=" bg-yellow-100"
        datebg+=" bg-yellow-100"
    }
    else{
        memobg+=" bg-blue-200"
        titlebg+=" bg-blue-100"
        contentbg+=" bg-blue-100"
        datebg+=" bg-blue-100"
    }

    return (
        <div>
            <Link to={"/memo/" + id}>
                <div className={memobg}>
                    <div className={titlebg}>{convertToRaw(title.getCurrentContent()).blocks[0].text}</div>
                    <div className={contentbg}>{convertToRaw(content.getCurrentContent()).blocks[0].text}</div>
                    <div className={datebg}>
                        <div className="inline-block text-xs align-middle">{date}</div>
                        <div className="align-middle">{Math.round((weather.temp-273.15) * 100) / 100}°C</div>
                        <div className="align-middle"><img src={imgSrc}/></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Memo;
