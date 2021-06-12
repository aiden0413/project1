import React, { memo } from "react";
import { EditorState, RichUtils, convertToRaw, Editor, convertFromRaw} from 'draft-js';

function Button({
    text = "button",
    btnFunc,
    onCreate,
    id="",
    data,
}) {

    
    const handleOnClick = () => {
        if(text==="새 메모"){

        }
        else if(text==="저장"){
            const today = new Date();
            const content_string = window.localStorage.getItem('content');
            
            const content_JSON = JSON.parse(content_string);
            const content_text = content_JSON.blocks[0].text;
            console.log(content_JSON);
            console.log(content_text);
            const update = {...data, title: "제목", content: content_text, date: today.toLocaleString()};
            btnFunc(id, update);
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