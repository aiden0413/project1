import React from "react";
import { Route, Link } from 'react-router-dom';

function Header() {
    return (
        <div className="py-6 px-6 border border-gray-300 relative fixed">
            <Link to="/">Wemo</Link>
        </div>
    )
}

export default Header;