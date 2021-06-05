import React from "react";

import Memo from './Memo';

function Memos() {
    return (
        <div className="overflow-y-auto auto-rows-min grid grid-cols-4 gap-6 flex-grow justify-start py-6 px-6 border border-gray-300 relative">
            <Memo title="제목" content="내용" date="2021.06.05"/>
            <Memo title="제목" content="내용" date="2021.06.05"/>
            <Memo title="제목" content="내용" date="2021.06.05"/>
        </div>
    )
}

export default Memos;