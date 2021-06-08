import React from "react";
import Editor from './Editor';
import Memo from './Memo';

function Memos({ data, sign, onSign}) {
    const memolist = data.memolist.map(
        memo => (<Memo
            id={memo.id}
            title={memo.title}
            content={memo.content}
            date={memo.date}
        />)
    );

    if(sign.makenewEditor === true){
        onSign(false);
        return (
            <div className="overflow-y-auto auto-rows-min grid grid-cols-4 gap-6 flex-grow justify-start py-6 px-6 border border-gray-300 relative">    
                {memolist}
            </div>
        )    
    }
    else{
        return (
            <div className="overflow-y-auto auto-rows-min grid grid-cols-4 gap-6 flex-grow justify-start py-6 px-6 border border-gray-300 relative">
             {memolist}
            </div>
        )
    }
}

export default Memos;