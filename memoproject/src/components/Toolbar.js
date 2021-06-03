import React from "react";

import Button from './Button';

function Toolbar() {
    return (
        <div className="flex flex-row flex-grow-0 gap-6 justify-start py-6 px-6 border border-gray-300 relative">
            <Button />
            <Button />
            <Button />
            <Button />
            Toolbar
        </div>
    )
}

export default Toolbar;