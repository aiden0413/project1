import React from "react";
import { Route, Link } from 'react-router-dom';
import markimg from './wemo_mark.png';

function Header() {
    return (
        <div className="py-6 px-6 border border-gray-300 relative fixed">
            <Link to="/"><img src={markimg}/></Link>
            
        </div>
    )
}

export default Header;