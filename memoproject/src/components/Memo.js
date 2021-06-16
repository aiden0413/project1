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

    return (
        <div>
            <Link to={"/memo/" + id}>
                <div className="flex flex-col gap-3 bg-green-400 p-3">
                    <div className="bg-green-200">{convertToRaw(title.getCurrentContent()).blocks[0].text}</div>
                    <div className="bg-green-200 h-300px">{convertToRaw(content.getCurrentContent()).blocks[0].text}</div>
                    <div className="bg-green-200 flex flex-row justify-between items-center">
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
