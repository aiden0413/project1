import React from "react";
import { Route, Link } from 'react-router-dom';
import markimg from './wemo_mark.png';

import Weather from "./Weather"

function Header() {
    return (
        <div className="flex flex-row justify-between py-6 px-6 border border-gray-300 relative fixed">
            <Link to="/"><img src={markimg}/></Link>
            <Weather/>
        </div>
    )
}

export default Header;