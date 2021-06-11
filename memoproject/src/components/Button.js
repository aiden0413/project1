import React, { memo } from "react";

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
            /*if(sign.makenewEditor===true){
                let today = new Date();
                const newmemo = {title: "new제목", content: "new내용", date: today.toLocaleString()};
                onCreate(newmemo);
            }
            let today = new Date();
            const update = {...data, date: today.toLocaleString()};
            btnFunc(id, update);*/
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