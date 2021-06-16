
import React from "react";
import { Link } from 'react-router-dom';
import { convertToRaw } from 'draft-js';

function Memo({
    id="",
    title="",
    content="",
    date="",
}) {
    return (
        <div>
            <Link to={"/memo/" + id}>
                <div className="flex flex-col gap-3 bg-green-400 p-3">
                    <div className="bg-green-200">{convertToRaw(title.getCurrentContent()).blocks[0].text}</div>
                    <div className="bg-green-200 h-300px">{convertToRaw(content.getCurrentContent()).blocks[0].text}</div>
                    <div className="bg-green-200">{date}</div>
                </div>
            </Link>
        </div>
    )
}

export default Memo;