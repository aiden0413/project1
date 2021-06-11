import React from "react";
import Editor from './Editor';
import Memo from './Memo';

function Memos({
    data,
    sign,
    onSign,
    onRemove,
    onEdit,
    onSave,
    onCancel,
}) {
    const memolist = data.memolist.map(
        memo => (<Memo
            id={memo.id}
            title={memo.title}
            content={memo.content}
            date={memo.date}
            editing={memo.editing}
            onEdit={onEdit}
            onRemove={onRemove}
            onSave={onSave}
            onCancel={onCancel}
        />)
    );
   
    if(sign.makenewEditor === true){
        return (
            <div className="overflow-y-auto auto-rows-min grid grid-cols-4 gap-6 flex-grow justify-start py-6 px-6 border border-gray-300 relative">    
                    <div><input className="memo_title" placeholder="제목"></input>
                    <input className="memo_content h-300px" placeholder="내용"></input>
                    <div className="bg-green-200">"2021-06-09-07-34"</div></div>
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