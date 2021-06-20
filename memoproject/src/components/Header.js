import React, { useEffect, useState } from "react";
import { Route, Link } from 'react-router-dom';
import markimg from './new_ci.png';

import Weather from "./Weather"

function Header() {
    const [today, setToday] = useState()

    useEffect(()=>{
        const realtimeweather = setInterval(() => {
            let date = new Date()     
            setToday(date.toLocaleString())
        }, 1000);
        return () => clearInterval(realtimeweather)
    },[today])

    return (
        <div className="flex flex-row justify-between py-6 px-6 border border-gray-300 relative fixed items-center">
            <Link to="/"><img src={markimg}/></Link>
            <div>{today}</div>
            <Weather/>
        </div>
    )
}

export default Header;