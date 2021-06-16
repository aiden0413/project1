import React, { memo } from "react";
import { EditorState, RichUtils, convertToRaw, Editor, convertFromRaw} from 'draft-js';

function Button({
    text = "button",
    btnFunc,
    id="",
    data,
}) {

    
    const handleOnClick = () => {
        if(text==="새 메모"){

        }
        else if(text==="저장"){
            const today = new Date();
            const title_string = window.localStorage.getItem('title');
            const title_JSON = EditorState.createWithContent(convertFromRaw(JSON.parse(title_string)));

            const content_string = window.localStorage.getItem('content');
            const content_JSON = EditorState.createWithContent(convertFromRaw(JSON.parse(content_string)));
            
            const update = {...data, title: title_JSON, content: content_JSON, date: today.toLocaleString()};
            btnFunc(id, update);
            console.log(content_JSON);
        }
        else if(text==="취소"){

        }
        else if(text==="삭제"){
            btnFunc(id);
        }
    }
    
    return (
        <div 
            className="flex-initial w-full py-1 px-3 font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-white bg-blue-400 border-green-400 hover:bg-green-600 hover:border-green-600"
            onClick={handleOnClick}
        >
            {text}
        </div>
    )
}

export default Button;