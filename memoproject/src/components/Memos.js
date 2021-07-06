import React from "react";
import { useSelector } from 'react-redux';
import { EditorState, convertFromRaw } from 'draft-js';

import Memo from './Memo';

function Memos (){
    const data = useSelector(state => state);

    if(data.length === 0){
        return(
            <div></div>
        );
    }
    else{
        const memolist = data.memolist.map(
            memo => (<Memo
                key={memo.id}
                id={memo.id}
                title={EditorState.createWithContent(convertFromRaw(JSON.parse(memo.title)))}
                content={EditorState.createWithContent(convertFromRaw(JSON.parse(memo.content)))}
                date={memo.date}
                weather={memo.weather}
            />)
        );

        return (
            <div className="overflow-y-auto auto-rows-min grid grid-cols-4 gap-6 flex-grow justify-start py-6 px-6 border border-gray-300 relative">
                {memolist}
            </div>
        )
    }
}

export default Memos;