import React from "react";

function Memo({ 
    title="",
    content="",
    date="",
}) {
    return (
        <div className="flex flex-col gap-3 bg-green-400 flex-grow">
            <div className="bg-green-200">{title}</div>
            <div className="bg-green-200 h-300px">{content}</div>
            <div className="bg-green-200">{date}</div>
        </div>
    )
}

export default Memo;