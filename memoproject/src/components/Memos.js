import React from "react";
import Memo from './Memo';
import { convertToRaw } from 'draft-js';

function Memos({
    data,
}) {
    const memolist = data.memolist.map(
        memo => (<Memo
            id={memo.id}
            title={memo.title}
            content={convertToRaw(memo.content.getCurrentContent()).blocks[0].text}
            date={memo.date}
        />)
    );
    
    return (
        <div className="overflow-y-auto auto-rows-min grid grid-cols-4 gap-6 flex-grow justify-start py-6 px-6 border border-gray-300 relative">
            {memolist}
        </div>
    )
}

export default Memos;