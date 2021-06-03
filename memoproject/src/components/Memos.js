import React from "react";

import Memo from './Memo';

function Memos() {
    return (
        <div className="flex-grow justify-start py-6 px-6 border border-gray-300 relative">
            <Memo />
        </div>
    )
}

export default Memos;