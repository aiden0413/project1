import React from "react";

import Button from './Button';

function Side() {
    return (
        <div className="flex-shrink-0 w-200px py-6 px-6 bg-green-400 text-white">
            <Button text="새 메모"/>
            Side
        </div>
    )
}

export default Side;